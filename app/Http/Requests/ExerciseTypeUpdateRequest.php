<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class ExerciseTypeUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $name = $this->request->get('name');

        return [
            'name' => [
                'sometimes',
                'filled',
                'min:3',
                'max:255',
                Rule::unique('exercise_types')->where(function ($query) use ($name) {
                    $query
                        ->where('name', $name)
                        ->where('user_id', Auth::user()->getAuthIdentifier());
                })->ignore($this->route('exerciseType'))
            ],
            'per_side' => 'sometimes|bool',
            'url' => 'sometimes|nullable|min:3|max:255',
        ];
    }
}
