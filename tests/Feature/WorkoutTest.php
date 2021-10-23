<?php

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Tests\TestCase;

class WorkoutTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function workout_can_be_created()
    {
        $this->actingAs(User::factory()->create());

        $attributes = Workout::factory()->raw();

        $response = $this->post(route('workouts.store'), $attributes);

        $response->assertStatus(Response::HTTP_OK);

        $this->assertDatabaseHas('workouts', $attributes);
    }

    /** @test */
    public function guest_cannot_create_a_workout()
    {
        $response = $this->post(route('workouts.store'), [
            'title' => 'Some workout title'
        ]);

        $response->assertStatus(Response::HTTP_FORBIDDEN);

        $this->assertDatabaseMissing('workouts', [
            'title' => 'Some workout title'
        ]);
    }

    /** @test */
    public function workout_title_is_required()
    {
        $this->actingAs(User::factory()->create());

        $attributes = [
            'description' => 'some'
        ];

        $this
            ->followingRedirects()
            ->post(route('workouts.store'), $attributes)
            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
            ->assertSessionHasErrors(['title']);

        $this->assertDatabaseMissing('workouts', $attributes);
    }
}
