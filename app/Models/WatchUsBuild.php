<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WatchUsBuild extends Model
{

    use HasUuids, HasFactory;

    protected $fillable = [
        'title',
        'youtube_url',
        'youtube_id',
        'thumbnail_url',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Custom Logic
    public static function boot()
    {
        parent::boot();

        static::creating(function ($video) {
            // Extract YouTube ID from URL
            if ($video->youtube_url && empty($video->youtube_id)) {
                $video->youtube_id = static::extractYouTubeId($video->youtube_url);
            }
        });
    }

    public static function extractYouTubeId($url)
    {
        preg_match(
            '/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/',
            $url,
            $matches
        );
        return $matches[1] ?? null;
    }
}