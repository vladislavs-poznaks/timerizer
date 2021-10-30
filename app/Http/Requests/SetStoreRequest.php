<?php

namespace App\Http\Requests;

use App\Constants\SetDictionaries;
use App\Constants\SetTypes;
use App\Models\Definition;
use App\Rules\DefinitionExists;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SetStoreRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required|min:3|max:255',
            'description' => 'sometimes|nullable|min:3|max:500',
            'type' => [
                'required',
                new DefinitionExists(SetDictionaries::TYPE),
            ],
            'rounds' => [
                Rule::requiredIf(
                    Definition::inDictionary(SetDictionaries::TYPE)
                        ->byName([SetTypes::ROUNDS, SetTypes::EMOM, SetTypes::TABATA])
                        ->get()
                        ->pluck('value')
                        ->contains($this->request->get('type'))
                ),
                'nullable',
                'integer',
                'gt:0',
            ],
            'total_seconds' => [
                Rule::requiredIf(
                    Definition::inDictionary(SetDictionaries::TYPE)
                        ->byName([SetTypes::AMRAP, SetTypes::REST])
                        ->get()
                        ->pluck('value')
                        ->contains($this->request->get('type'))
                ),
                'nullable',
                'integer',
                'gt:0',
            ],
            'work_seconds' => [
                Rule::requiredIf(
                    Definition::inDictionary(SetDictionaries::TYPE)
                        ->byName([SetTypes::EMOM, SetTypes::TABATA])
                        ->get()
                        ->pluck('value')
                        ->contains($this->request->get('type'))
                ),
                'nullable',
                'integer',
                'gt:0',
            ],
            'rest_seconds' => [
                Rule::requiredIf(
                    Definition::inDictionary(SetDictionaries::TYPE)
                        ->byName([SetTypes::TABATA])
                        ->get()
                        ->pluck('value')
                        ->contains($this->request->get('type'))
                ),
                'nullable',
                'integer',
                'gt:0',
            ],
        ];
    }
}
