<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Workout extends Model
{
    use HasFactory, SoftDeletes;

    public function resolveRouteBinding($value, $field = null)
    {
        return $this
            ->with(['sets', 'sets.exercises'])
            ->whereId($value)
            ->firstOrFail();
    }

    protected $fillable = [
        'title',
        'description',
        'public',
    ];

    public function owner(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function sets(): HasMany
    {
        return $this->hasMany(Set::class);
    }
}
