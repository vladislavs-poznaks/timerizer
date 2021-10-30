<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Exercise extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'name',
        'repetitions',
        'seconds',
        'per_side',
        'url',
    ];

    protected $casts = [
        'per_side' => 'bool'
    ];

    public function sets(): BelongsToMany
    {
        return $this->belongsToMany(Set::class);
    }
}
