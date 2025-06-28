<?php

namespace App\Http\Controllers\Admin;

use App\Models\Resource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;
class AdminResourceController extends Controller
{
    public function index()
    {
        $resources = Resource::with('category')->latest()->paginate(3);
        return Inertia::render('Admin/Resources/ResourcesManager', [
            'resources' => $resources,
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Admin/Resources/ResourceForm', [
            'categories' => $categories,
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|unique:resources,slug',
            'description' => 'nullable|string',
            'category_id' => 'required|uuid|exists:categories,id',
            'tags' => 'nullable|string',
            'tool' => 'nullable|string',
            'resource_type' => 'required|string|in:free,pro',
            'guide_url' => 'nullable|string',
            'video_url' => 'nullable|string',
        ]);

        $data['slug'] = $data['slug'] ?? Str::slug($data['title']) . '-' . Str::random(5);

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

        Resource::create($data);

        return redirect()->route('admin.resources.index')->with('success', 'Resource created successfully!');
    }

    public function edit(Resource $resource)
    {
        $categories = Category::all();
        return Inertia::render('Admin/Resources/ResourceForm', [
            'resource' => $resource,
            'categories' => $categories,
        ]);
    }


    public function update(Request $request, Resource $resource)
    {
        // dd($request->all(), $resource);
        $resource->fill($request->all());
        // dd($resource->isDirty(), $request->all());
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'slug' => 'nullable|string|unique:resources,slug,' . $resource->id,
            'description' => 'nullable|string',
            'category_id' => 'uuid|exists:categories,id',
            'tags' => 'nullable|string',
            'tool' => 'nullable|string',
            'resource_type' => 'string|in:free,pro',
            'guide_url' => 'nullable|url',
            'video_url' => 'nullable|url',
        ]);

        // ✅ Handle thumbnail upload
        if ($request->hasFile('thumbnail_path')) {
            $request->validate([
                'thumbnail_path' => 'image|mimes:jpg,jpeg,png,gif|max:2048',
            ]);

            // Delete old file if exists
            if ($resource->thumbnail_path && Storage::disk('public')->exists($resource->thumbnail_path)) {
                Storage::disk('public')->delete($resource->thumbnail_path);
            }

            $data['thumbnail_path'] = $request->file('thumbnail_path')->store('resources/thumbnails', 'public');
        } else {
            $data['thumbnail_path'] = $resource->thumbnail_path;
        }

        // ✅ Handle workflow file upload
        if ($request->hasFile('file_path')) {
            $request->validate([
                'file_path' => 'file|mimes:pdf,doc,docx,json,xls,xlsx,ppt,pptx,txt,zip|max:2048',
            ]);

            if ($resource->file_path && Storage::disk('public')->exists($resource->file_path)) {
                Storage::disk('public')->delete($resource->file_path);
            }

            $data['file_path'] = $request->file('file_path')->store('resources/files', 'public');
        } else {
            $data['file_path'] = $resource->file_path;
        }

        $resource->update($data);
        $resource->save();

        // return redirect()->back()->with('success', 'Resource updated successfully!');
        return to_route('admin.resources.index')->with('success', 'Resource updated successfully!');
    }


    public function destroy(Resource $resource)
    {
        // Delete thumbnail if it exists
        if ($resource->thumbnail_path && Storage::disk('public')->exists($resource->thumbnail_path)) {
            Storage::disk('public')->delete($resource->thumbnail_path);
        }

        // Delete file if it exists
        if ($resource->file_path && Storage::disk('public')->exists($resource->file_path)) {
            Storage::disk('public')->delete($resource->file_path);
        }

        // Now delete the resource record
        $resource->delete();

        return redirect()->route('admin.resources.index')->with('success', 'Resource deleted successfully!');
    }
}
// This code defines a ResourceController for managing resources in a Laravel application.
// It includes methods for listing, creating, storing, editing, updating, and deleting resources.
