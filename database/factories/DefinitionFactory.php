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
            'name' => $this->faker->unique(true)->text(20),
            'value' => $this->faker->unique(true)->numberBetween(10, 50),
        ];
    }
}
