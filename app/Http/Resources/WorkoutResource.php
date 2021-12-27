<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class WorkoutResource extends JsonResource
{
    public static $wrap = null;

    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'sets' => $this->sets,
            'description' => $this->description,
            'public' => $this->public,
            'total_seconds' => $this->total_seconds,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
