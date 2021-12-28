<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class WorkoutUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'sometimes|filled|min:3|max:255',
            'description' => 'sometimes|nullable|min:3|max:500',
            'public' => 'sometimes|boolean',
        ];
    }
}
