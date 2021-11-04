<?php

namespace Tests\Feature;

use App\Models\ExerciseType;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Tests\TestCase;

class ExerciseTypeTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
    }

    /** @test  */
    public function exercise_type_can_be_created()
    {
        $attributes = ExerciseType::factory()
            ->raw();

        $this
            ->actingAs($this->user)
            ->followingRedirects()
            ->post(route('exercise-types.store'), $attributes)
            ->assertStatus(Response::HTTP_OK);

        $this->assertDatabaseHas('exercise_types', $attributes);
    }
}
