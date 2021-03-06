<?php

namespace Database\Factories;

use App\Models\ExerciseType;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExerciseTypeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = ExerciseType::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->realTextBetween(10, 20),
            'per_side' => $this->faker->randomElement([true, false]),
            'url' => $this->faker->url(),
        ];
    }
}
