<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
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
}
