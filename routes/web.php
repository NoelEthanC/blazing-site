<?php

use App\Http\Controllers\Admin\AdminResourceController;
use App\Http\Controllers\Admin\LeadsController;
use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\Home\HomepageController;
use App\Http\Controllers\Home\ResourceController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomepageController::class, 'index'])->name('home');
Route::get('/resources/{resource:slug}', [ResourceController::class, 'show'])->name('resources.show');
Route::get('/resources', [ResourceController::class, 'index'])->name('resources.index');
Route::patch('/resources/{resource}/download', [ResourceController::class, 'download'])->name('resources.download');
Route::post('/send-form-email', [HomepageController::class, 'sendFormEmail'])->name('home.sendEmail');





Route::get('/about', function () {
    return Inertia::render('About', [
    ]);
});
Route::get('/blog', function () {
    return Inertia::render('Blog', [
    ]);
});


Route::prefix('admin')->name('admin.')->group(function () {
    // overview dashboard routes
    Route::get('/overview', [AdminDashboardController::class, 'index'])->name('overview');

    Route::resource('resources', AdminResourceController::class)->names('resources')->except(['show']);
    Route::resource('leads', LeadsController::class)->names('leads')->except(['show', 'edit']);
    // // Add other admin routes here
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// if (env('APP_ENV')) {
//     URL::forceScheme('https');
// }

require __DIR__ . '/auth.php';