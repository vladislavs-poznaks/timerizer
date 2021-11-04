<?php

namespace Database\Factories;

use App\Constants\SetDictionaries;
use App\Constants\SetTypes;
use App\Models\Definition;
use App\Models\Set;
use App\Models\Workout;
use Illuminate\Database\Eloquent\Factories\Factory;

class SetFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Set::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $types = Definition::inDictionary(SetDictionaries::TYPE)->get();

        $type = $types->random();

        return [
            'workout_id' => Workout::factory()->create(),
            'title' => $this->faker->realTextBetween(10, 20),
            'description' => $this->faker->realTextBetween(30, 100),
            'type' => $type->value,
            'rounds' => in_array(
                $type->name,
                [SetTypes::ROUNDS, SetTypes::EMOM, SetTypes::TABATA]
            )
                ? $this->faker->numberBetween(1, 15)
                : null,
            'total_seconds' => in_array(
                $type->name,
                [SetTypes::AMRAP, SetTypes::REST]
            )
                ? $this->faker->numberBetween(10, 100)
                : null,
            'work_seconds' => in_array(
                $type->name,
                [SetTypes::EMOM, SetTypes::TABATA]
            )
                ? $this->faker->numberBetween(20, 30)
                : null,
            'rest_seconds' => in_array(
                $type->name,
                [SetTypes::TABATA]
            )
                ? $this->faker->numberBetween(10, 20)
                : null,
        ];
    }
}
