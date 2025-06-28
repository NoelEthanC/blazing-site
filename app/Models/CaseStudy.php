<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CaseStudy extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'client',
        'thumbnail_path',
        'content',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Custom Logic
    public static function boot()
    {
        parent::boot();

        static::creating(function ($caseStudy) {
            if (empty($caseStudy->slug)) {
                $caseStudy->slug = \Str::slug($caseStudy->title);
            }
        });

        static::updating(function ($caseStudy) {
            if ($caseStudy->isDirty('title')) {
                $caseStudy->slug = \Str::slug($caseStudy->title);
            }
        });
    }
}