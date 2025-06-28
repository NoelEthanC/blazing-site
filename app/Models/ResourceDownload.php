<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ResourceDownload extends Model
{

    use HasUuids, HasFactory;

    protected $fillable = [
        'resource_id',
        'email',
        'download_method',
    ];

    protected $casts = [
        'download_method' => 'string', // Enum: instant, email
        'created_at' => 'datetime',
    ];

    // Relationships
    public function resource(): BelongsTo
    {
        return $this->belongsTo(Resource::class);
    }

    // Custom Logic
    public static function recordDownload($resource, $email, $method = 'email')
    {
        $download = static::create([
            'resource_id' => $resource->id,
            'email' => $email,
            'download_method' => $method,
        ]);

        $resource->incrementDownloads();

        // Record lead
        Lead::firstOrCreate(
            ['email' => $email],
            ['source' => 'resource_download']
        );

        return $download;
    }
}