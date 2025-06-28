<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use App\Models\Resource;
use App\Models\ResourceDownload as ResourceDownloadModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\EmailSubmission;
use App\Mail\ResourceDownload;
use App\Jobs\SendResourceEmail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\RateLimiter;

class ResourceController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request)
    {

        // $resources = Resource::with('category')
        //     ->latest()
        //     ->paginate(6);

        $resources = Resource::query()
            ->when($request->search, function ($query, $search) {
                $query->where('title', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            })
            ->paginate(6);

        return Inertia::render('Resources/Index', [
            'resources' => $resources,
        ]);
    }

    public function show(Resource $resource)
    {
        $resource->load('category');

        return Inertia::render('Resources/Show', [
            'resource' => $resource,
            "relatedResources" => Resource::where('id', '!=', $resource->id)
                // ->where('category_id', $resource->category_id)
                ->take(5)
                ->get(),

            'breadcrumbs' => [
                ['label' => 'Resources', 'url' => route('resources.index')],
                ['label' => $resource->title, 'url' => null]
            ]
        ]);
    }

    public function download(Request $request, Resource $resource)
    {
        // TODO: REVERT THE ATTEMPTS TO 10
        // Rate limiting
        $key = 'download-attempt:' . $request->ip();
        if (RateLimiter::tooManyAttempts($key, 50)) {
            return redirect()->back()->with([
                'success' => true,
                'errors' => ['email' => ['Too many download attempts. Please try again later.']]
            ], 429);
        }

        RateLimiter::hit($key, 300); // 5 minutes

        // Validate input
        $validator = Validator::make($request->all(), [
            'email' => 'required|email:rfc,dns',
            'action' => 'required|in:download_now,send_email'
        ]);

        if ($validator->fails()) {
            return redirect()->back()->with([
                'success' => false,
                'errors' => $validator->errors()
            ], 422)->withErrors($validator->errors());
        }


        // Check if resource exists and is downloadable
        if (!$resource->file_path || !Storage::disk('public')->exists($resource->file_path)) {
            return response()->json([
                'success' => false,
                'errors' => ['resource' => ['Resource file not found.']]
            ], 404);
        }

        // Log download attempt
        Lead::create([
            'email' => $request->email,
            'resource_id' => $resource->id,
            // 'action' => $request->action,
            // 'ip_address' => $request->ip(),
            // 'user_agent' => $request->userAgent()
        ]);

        ResourceDownloadModel::create([
            'resource_id' => $resource->id,
            'email' => $request->email,
            'download_method' => $request->action === 'download_now' ? 'instant' : 'email',
            // 'user_agent' => $request->userAgent(),
            // 'action' => $request->action
        ]);

        // Increment download count
        $resource->incrementDownloads();

        if ($request->action === 'download_now') {
            return $this->handleDirectDownload($resource);
        } else {
            return $this->handleEmailDownload($request->email, $resource);
        }
    }

    private function handleDirectDownload(Resource $resource)
    {
        try {
            $downloadUrl = Storage::temporaryUrl(
                $resource->file_path,
                now()->addHours(24)
            );
            // dd($downloadUrl);
            // Return redirect with download URL
            // This will allow the frontend to handle the download

            return redirect()->back()->with([
                'download_url' => $downloadUrl,
                'success' => true,
                'action' => 'download_now',
                'expires_at' => now()->addHours(24)->toISOString()
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'success' => false,
                'errors' => ['download' => ['Failed to generate download link.']]
            ], 500);
        }
    }

    private function handleEmailDownload(string $email, Resource $resource)
    {
        try {
            // Queue email job
            // SendResourceEmail::dispatch($email, $resource);

            return redirect()->back()->with([
                'success' => true,
                'action' => 'send_email',
                'message' => 'Resource sent to your email successfully'
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'success' => false,
                'errors' => ['email' => ['Failed to send email. Please try again.']]
            ], 500);
        }
    }
}
