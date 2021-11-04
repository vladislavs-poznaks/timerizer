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

    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
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

//    /** @test */
//    public function guest_cannot_create_a_workout()
//    {
//        $this->assertGuest();
//
//        $attributes = Workout::factory()->raw();
//
//        $this
//            ->followingRedirects()
//            ->post(route('workouts.store'), $attributes)
//            ->assertStatus(Response::HTTP_FORBIDDEN);
//
//        $this->assertDatabaseMissing('workouts', [
//            'title' => $attributes['title'],
//            'description' => $attributes['description'],
//        ]);
//    }
//
//    /** @test */
//    public function workout_title_is_required()
//    {
//        $this->actingAs(User::factory()->create());
//
//        $attributes = [
//            'description' => 'some'
//        ];
//
//        $this
//            ->followingRedirects()
//            ->post(route('workouts.store'), $attributes)
//            ->assertStatus(Response::HTTP_UNPROCESSABLE_ENTITY)
//            ->assertSessionHasErrors(['title']);
//
//        $this->assertDatabaseMissing('workouts', $attributes);
//    }
}
