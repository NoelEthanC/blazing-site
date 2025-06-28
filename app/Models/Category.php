<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Category extends Model
{

    use HasUuids, HasFactory;

    protected $fillable = [
        'name',
        'slug',
    ];

    // Relationships
    public function resources(): HasMany
    {
        return $this->hasMany(Resource::class);
    }

    // Custom Logic
    public static function boot()
    {
        parent::boot();

        static::creating(function ($category) {
            if (empty($category->slug)) {
                $category->slug = \Str::slug($category->name);
            }
        });

        static::updating(function ($category) {
            if ($category->isDirty('name')) {
                $category->slug = \Str::slug($category->name);
            }
        });
    }
}