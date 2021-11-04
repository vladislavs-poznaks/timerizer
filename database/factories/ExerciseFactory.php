<?php

namespace Database\Factories;

use App\Models\Exercise;
use App\Models\ExerciseType;
use App\Models\Set;
use Illuminate\Database\Eloquent\Factories\Factory;

class ExerciseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Exercise::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $isRepetitionBased = $this->faker->randomElement([true, false]);

        $isTimeBased = ! $isRepetitionBased;

        return [
            'exercise_type_id' => ExerciseType::factory()->create(),
            'set_id' => Set::factory()->create(),
            'repetitions' => $isRepetitionBased ? $this->faker->numberBetween(10, 30) : null,
            'seconds' => $isTimeBased ? $this->faker->numberBetween(10, 100) : null,
        ];
    }
}
