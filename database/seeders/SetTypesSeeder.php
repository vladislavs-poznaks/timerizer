<?php

namespace Database\Seeders;

use App\Constants\SetDictionaries;
use App\Constants\SetTypes;

class SetTypesSeeder extends DictionarySeeder
{
    protected string $dictionary = SetDictionaries::TYPE;

    protected array $items = [
        SetTypes::ROUNDS => [
            'value' => 1,
            'description' => 'Rounds based set'
        ],
        SetTypes::AMRAP => [
            'value' => 2,
            'description' => 'Time based set, work for set total period of time'
        ],
        SetTypes::EMOM => [
            'value' => 3,
            'description' => 'Time based set, each exercise cannot exceed a predetermined time'
        ],
        SetTypes::TABATA => [
            'value' => 4,
            'description' => 'Time based set, alters between work time and rest time'
        ],
        SetTypes::REST => [
            'value' => 5,
            'description' => 'Rest for determined period of time'
        ],
    ];
}
