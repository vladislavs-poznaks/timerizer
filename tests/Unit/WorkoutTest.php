<?php

namespace Tests\Unit;

use App\Models\Definition;
use App\Models\Dictionary;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class WorkoutTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function workout_has_a_title_and_description()
    {
        $attributes = [
            'title' => 'test',
            'description' => 'Some random desctription',
        ];

        $workout = Workout::factory()->make($attributes);

        $this->assertEquals($attributes['title'], $workout->title);
        $this->assertEquals($attributes['description'], $workout->description);

        $this->assertTrue($workout->public);
    }

    /** @test */
    public function workout_belongs_to_an_owner()
    {
        $workout = Workout::factory()->create();

        $this->assertInstanceOf(User::class, $workout->owner);
    }
}
