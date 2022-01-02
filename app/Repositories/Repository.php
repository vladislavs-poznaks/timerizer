<?php

namespace App\Repositories;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

abstract class Repository
{
    private Builder $query;

    abstract protected function getModel(): Model;

    public function query()
    {

    }

    public function store(array $attributes): Model
    {
        return $this->getModel()::create($attributes);
    }

    public function update(Model $model, array $attributes): Model
    {
        $model->update($attributes);

        return $model;
    }
}
