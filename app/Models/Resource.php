<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Resource extends Model
{
    use HasUuids, HasFactory;
    public $fillable = [
        'title',
        'slug',
        'description',
        'tool',
        'resource_type',
        'file_path',
        'thumbnail_path',
        'guide_url',
        'video_url',
        'category_id',
        'downloads_count',
    ];

    protected $casts = [
        'tool' => 'string', // Enum: n8n, Zapier, Make, Airtable, HubSpot, etc.
        'resource_type' => 'string', // Enum: free, pro
        'downloads_count' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    // Relationships
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function downloads(): HasMany
    {
        return $this->hasMany(ResourceDownload::class);
    }
    public function associatedLeads(): HasMany
    {
        return $this->hasMany(Lead::class);
    }

    // make the key routename key to be slug
    public function getRouteKeyName(): string
    {
        return 'slug';
    }
    // Custom Logic
    public function incrementDownloads(): void
    {
        $this->increment('downloads_count');
    }

    // Scope for filtering by tool or type
    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['tool'] ?? null, fn($query, $tool) =>
            $query->where('tool', $tool))
            ->when($filters['resource_type'] ?? null, fn($query, $type) =>
                $query->where('resource_type', $type));
    }

    // Generate slug from title
    public static function boot()
    {
        parent::boot();

        static::creating(function ($resource) {
            if (empty($resource->slug)) {
                $resource->slug = \Str::slug($resource->title);
            }
        });

        static::updating(function ($resource) {
            if ($resource->isDirty('title')) {
                $resource->slug = \Str::slug($resource->title);
            }
        });
    }
}