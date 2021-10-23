<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Dictionary extends Model
{
    use HasFactory;

    protected $fillable = [
        'title'
    ];

    public function scopeByTitle(Builder $query, string $title): Builder
    {
        return $query->whereTitle($title)->with('definitions:dictionary_id,name,value');
    }

    public function definitions(): HasMany
    {
        return $this->hasMany(Definition::class);
    }
}
