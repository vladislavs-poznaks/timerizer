<?php

namespace App\Traits;

use Illuminate\Support\Str;

trait Uuids
{
    protected static function bootUuids()
    {
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string) Str::uuid();
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}
