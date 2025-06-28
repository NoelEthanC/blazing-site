<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

// class AdminDashboardController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Admin/Dashboard', [
            // Critical data for "Overview" tab
            'overview' => fn() => [
                'totalResources' => \App\Models\Resource::count(),
                'totalLeads' => \App\Models\Lead::count(),
                'recentDownloads' => \App\Models\ResourceDownload::latest()->limit(5)->get()
            ],

            // Deferred non-critical data for other tabs
            'resources' => Inertia::defer(fn() => \App\Models\Resource::paginate(10), 'resources'),
            'leads' => Inertia::defer(fn() => \App\Models\Lead::latest()->paginate(10), 'leads'),
            // 'tools' => Inertia::defer(fn() => \App\Models\Tool::all(), 'tools'),
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
}

