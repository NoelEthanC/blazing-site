<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Jobs\SendContactFormEmail;
use App\Mail\ContactFormSubmitted;
use App\Models\Resource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request)
    {
        $resources = Resource::with('category')
            ->latest()
            ->limit(5)
            ->get();
        return Inertia::render('Home', [
            'resources' => $resources,
        ]);
    }

    public function sendFormEmail(Request $request)
    {
        // dd($request->all());
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        // SendContactFormEmail::dispatch($validated['name'], $validated['email'], $validated['message']);

        return redirect()->back()->with('message', 'Message sent!');
    }
}
