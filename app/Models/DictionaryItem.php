<?php

namespace App\Models;

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

    public function dictionary(): BelongsTo
    {
        return $this->belongsTo(DictionaryList::class);
    }
}
