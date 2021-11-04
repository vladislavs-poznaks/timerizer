<?php

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;
use Inertia\Testing\Assert;
use Tests\TestCase;

class WorkoutTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
    }

    /** @test */
    public function workout_index_and_create_page_can_be_visited()
    {
        $this
            ->actingAs($this->user)
            ->followingRedirects()
            ->get(route('workouts.index'))
            ->assertStatus(Response::HTTP_OK);
    }

    /** @test */
    public function workout_show_page_can_be_visited()
    {
        $workout = Workout::factory()
            ->create([
                'user_id' => $this->user->id,
            ]);

        $this
            ->actingAs($this->user)
            ->followingRedirects()
            ->get(route('workouts.show', $workout))
            ->assertStatus(Response::HTTP_OK);
    }

    /** @test */
    public function workout_can_be_created()
    {
        $attributes = Workout::factory()->raw([
            'user_id' => $this->user->id,
        ]);

        $this
            ->actingAs($this->user)
            ->followingRedirects()
            ->post(route('workouts.store'), $attributes)
            ->assertStatus(Response::HTTP_OK);

        $this->assertDatabaseHas('workouts', $attributes);
    }

    /** @test */
    public function guest_cannot_create_a_workout()
    {
        $this->assertGuest();

        $attributes = Workout::factory()->raw();

        $this
            ->post(route('workouts.store'), $attributes)
            ->assertRedirect(route('login'));

        $this->assertDatabaseMissing('workouts', [
            'title' => $attributes['title'],
            'description' => $attributes['description'],
        ]);
    }

    /** @test */
    public function workout_title_is_required()
    {
        $attributes = [
            'description' => 'some'
        ];

        $this
            ->actingAs($this->user)
            ->followingRedirects()
            ->post(route('workouts.store'), $attributes)
            ->assertInertia(fn(Assert $page) => $page->has('errors', 1));

        $this->assertDatabaseMissing('workouts', $attributes);
    }

    /** @test */
    public function workout_description_and_public_attribute_are_optional()
    {
        $attributes = [
            'title' => 'some'
        ];

        $this
            ->actingAs($this->user)
            ->followingRedirects()
            ->post(route('workouts.store'), $attributes)
            ->assertStatus(Response::HTTP_OK);

        $this->assertDatabaseHas('workouts', $attributes);
    }
}
