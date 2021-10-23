<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Definition extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'value',
    ];

    public function scopeInDictionary(Builder $query, string $title): Builder
    {
        return $query->whereHas('dictionary', function (Builder $query) use ($title) {
            $query->whereTitle($title);
        });
    }

    public function scopeByName(Builder $query, array | string $names): Builder
    {
        return $query->whereIn('name', (array) $names);
    }

    public function dictionary(): BelongsTo
    {
        return $this->belongsTo(Dictionary::class);
    }
}
