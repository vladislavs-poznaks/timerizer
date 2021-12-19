<?php

namespace App\Models;

use App\Traits\Uuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Exercise extends Model
{
    use HasFactory, SoftDeletes, Uuids;

    protected $fillable = [
        'exercise_type_id',
        'repetitions',
        'seconds',
    ];

    protected $with = [
        'type'
    ];

    public function set(): BelongsTo
    {
        return $this->belongsTo(Set::class);
    }

    public function type(): BelongsTo
    {
        return $this->belongsTo(ExerciseType::class, 'exercise_type_id');
    }
}
