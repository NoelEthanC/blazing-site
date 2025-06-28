<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\{Resource, Tool, WatchUsBuild, BlogPost, Lead, ResourceDownload};
use App\Models\Booking;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminDashboardController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/AnalyticsOverview', [
            'overview' => fn() => [
                'totalResources' => Resource::count(),
                'totalDownloads' => ResourceDownload::count(),
                'bookings' => Booking::count(),
                'recentDownloads' => ResourceDownload::select('resource_downloads.email', 'resources.title', 'resource_downloads.created_at')
                    ->join('resources', 'resources.id', '=', 'resource_downloads.resource_id')
                    ->latest('resource_downloads.created_at')
                    ->limit(5)
                    ->get(),

                'emailSubmissions' => Lead::distinct()->count('email'),
            ],
            'resources' => Inertia::defer(fn() => Resource::latest()->paginate(10), 'resources'),
            // 'watchVideos' => Inertia::defer(fn() => WatchUsBuild::all(), 'videos'),

            'categories' => Inertia::defer(fn() => Category::all(), 'categories'),
            'leads' => Inertia::defer(fn() => Lead::latest()->paginate(10), 'leads'),
        ]);
    }

    public function reloadTab(Request $request)
    {
        // Partial reload endpoint for specific tab
        $tab = $request->input('tab');

        $data = match ($tab) {
            'resources' => ['resources' => fn() => \App\Models\Resource::paginate(10)],
            'leads' => ['leads' => fn() => \App\Models\Lead::latest()->paginate(10)],
            // 'tools' => ['tools' => fn() => \App\Models\Tool::all()],
            // 'blog' => ['blogPosts' => fn() => \App\Models\BlogPost::latest()->take(10)->get()],
            default => []
        };

        return Inertia::render('Admin/Dashboard', $data);
    }

    // Generic CRUD handler to keep things DRY
    public function storeResource(Request $request)
    {

        $data = $request->validate([
            'title' => 'required|string',
            'slug' => 'nullable|string|unique:resources,slug',
            'description' => 'nullable|string',
            'category_id' => 'required|uuid|exists:categories,id',
            'tags' => 'nullable|string',
            'tool' => 'nullable|string',
            'resource_type' => 'required|string|in:free,paid',
            'guide_url' => 'nullable|string',
            'video_url' => 'nullable|string',
            'file_path' => 'required',
            'thumbnail_path' => 'required',
        ]);

        if ($request->hasFile('thumbnail_path')) {
            $request->validate([
                'thumbnail_path' => 'image|mimes:jpg,jpeg,png,gif|max:2048',
            ]);
            $data['thumbnail_path'] = $request->file('thumbnail_path')->store('resources/thumbnails', 'public');
        }

        if ($request->hasFile('file_path')) {
            $request->validate([
                'file_path' => 'file|mimes:pdf,doc,docx,json,xls,xlsx,ppt,pptx,txt|max:2048',
            ]);
            $data['file_path'] = $request->file('file_path')->store('resources/files', 'public');
        }
        // dd($data);
        Resource::create($data);


        return to_route('admin.dashboard')->with('success', 'Resource created successfully.');
    }


    public function updateResource(Request $request, Resource $resource)
    {
        $resource->update($request->validate([
            'title',
            'slug',
            'description',
            'tool',
            'resource_type',
            'file_path',
            'thumbnail_path',
            'guide_url',
            'video_url'
        ]));
        return redirect()->back();
    }

    public function destroyResource(Resource $resource)
    {
        $resource->delete();
        return redirect()->back();
    }

    // CRUD: Tool


    // CRUD: WatchUsBuild Video


}