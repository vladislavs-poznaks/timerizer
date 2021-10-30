<?php

namespace App\Rules;

use App\Models\Definition;
use Illuminate\Contracts\Validation\Rule;

class DefinitionExists implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(protected string $dictionary)
    {
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return Definition::inDictionary($this->dictionary)
            ->byValue($value)
            ->exists();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Selected type with value ":value" does not exist.';
    }
}
