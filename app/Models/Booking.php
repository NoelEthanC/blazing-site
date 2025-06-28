<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{

    use HasUuids, HasFactory;

    protected $fillable = [
        'email',
        'name',
        'booking_time',
        'source',
    ];

    protected $casts = [
        'booking_time' => 'datetime',
        'created_at' => 'datetime',
    ];

    // Custom Logic
    public function scopeBySource($query, $source)
    {
        return $query->where('source', $source);
    }
}