<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Workout extends Model
{
    use HasFactory, SoftDeletes, Uuids;

    public function resolveRouteBinding($value, $field = null)
    {
        return $this
            ->with(['sets' => fn($query) => $query->orderBy('created_at')])
            ->whereId($value)
            ->firstOrFail();
    }

    protected $fillable = [
        'title',
        'description',
        'public',
    ];

//    protected $casts = [
//        'total_seconds' => 'int'
//    ];

    public function getTotalSecondsAttribute()
    {
        return $this->sets
            ->filter(fn ($set) => $set->total_seconds)
            ->pluck('total_seconds')
            ->sum();
    }

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function sets(): HasMany
    {
        return $this->hasMany(Set::class);
    }
}
