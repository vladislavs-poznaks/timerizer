<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DictionaryItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'value',
    ];

    public function scopeInList(Builder $query, string $title): Builder
    {
        return $query->whereHas('dictionary', function (Builder $query) use ($title) {
            $query->whereTitle($title);
        });
    }

    public function scopeByName(Builder $query, string $name): Builder
    {
        return $query->whereName($name);
    }

    public function dictionary(): BelongsTo
    {
        return $this->belongsTo(DictionaryList::class, 'dictionary_list_id');
    }
}
