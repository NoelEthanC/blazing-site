<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasUuids, HasFactory;

    protected $fillable = [
        'email',
        'source',
        'resource_id'
    ];

    protected $casts = [
        'created_at' => 'datetime',
    ];

    // Relationships
    public function resource()
    {
        return $this->belongsTo(Resource::class, 'resource_id');
    }
    // Custom Logic
    public function scopeBySource($query, $source)
    {
        return $query->where('source', $source);
    }
}