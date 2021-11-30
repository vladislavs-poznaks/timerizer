<?php

namespace App\Models;

use App\Constants\SetDictionaries;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Set extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'title',
        'description',
        'type',
        'rounds',
        'total_seconds',
        'work_seconds',
        'rest_seconds',
    ];

    protected $with = [
        'exercises',
    ];

    protected $appends = [
        'type_name',
    ];

    public function getTypeNameAttribute()
    {
        $definition = Definition::inDictionary(SetDictionaries::TYPE)
            ->byValue($this->type)
            ->sole();

        return $definition->name;
    }

    public function getTotalSecondsAttribute($value)
    {
        if (is_null($value)) {
            return ($this->getAttribute('work_seconds') + $this->getAttribute('rest_seconds')) * $this->getAttribute('rounds');
        }

        return $value;
    }

    public function workout(): BelongsTo
    {
        return $this->belongsTo(Workout::class);
    }

    public function exercises(): HasMany
    {
        return $this->hasMany(Exercise::class);
    }
}
