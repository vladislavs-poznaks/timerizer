<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

trait Filterable
{
    public function scopeFilter(Builder $query, Request $request)
    {
        foreach ($request->all() as $key => $value) {
            $query->when($this->isFillable($key), function (Builder $query) use ($key, $value) {
                $query->where($key, 'like', "%{$value}%");
            });
        }
    }
}
