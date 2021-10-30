<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ExerciseStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|min:3|max:255',
            'repetitions' => [
                'required_without:seconds',
                'nullable',
                'integer',
                'gt:0',
                Rule::excludeIf(! empty($this->request->get('seconds'))),
            ],
            'seconds' => [
                'required_without:repetitions',
                'nullable',
                'integer',
                'gt:0',
                Rule::excludeIf(! empty($this->request->get('repetitions'))),
            ],
            'per_side' => 'sometimes|bool',
            'url' => 'sometimes|nullable|min:3|max:255',
        ];
    }
}
