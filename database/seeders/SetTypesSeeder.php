<?php

namespace Database\Seeders;

use App\Constants\SetDictionaries;
use App\Constants\SetTypes;

class SetTypesSeeder extends DictionarySeeder
{
    protected string $dictionary = SetDictionaries::TYPE;

    protected array $items = [
        SetTypes::COUNT => 1,
        SetTypes::AMRAP => 2,
        SetTypes::EMOM => 3,
        SetTypes::TABATA => 4,
    ];
}
