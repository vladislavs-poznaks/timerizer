<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class DictionaryList extends Model
{
    use HasFactory;

    protected $fillable = [
        'title'
    ];

    public function scopeByTitle(Builder $query, string $title): Builder
    {
        return $query->whereTitle($title)->with('items:id,dictionary_list_id,name,value');
    }

    public function items(): HasMany
    {
        return $this->hasMany(DictionaryItem::class);
    }
}