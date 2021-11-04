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
            'exercise_type_id' => 'required|exists:exercise_types,id',

            'repetitions' => [
                'required_without:seconds',
                'nullable',
                'integer',
                'gt:0',
                'exclude_unless:seconds,null',
//                Rule::excludeIf(! empty($this->request->get('seconds'))),
            ],

            'seconds' => [
                'required_without:repetitions',
                'nullable',
                'integer',
                'gt:0',
                'exclude_unless:repetitions,null',
//                Rule::excludeIf(! empty($this->request->get('repetitions'))),
            ],
        ];
    }
}
