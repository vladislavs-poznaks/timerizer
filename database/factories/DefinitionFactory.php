<?php

namespace Database\Factories;

use App\Models\Definition;
use App\Models\Dictionary;
use Illuminate\Database\Eloquent\Factories\Factory;

class DefinitionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Definition::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'dictionary_id' => Dictionary::factory(),
            'name' => $this->faker->text(10),
            'value' => $this->faker->randomNumber(1),
        ];
    }
}
