<?php

namespace Tests\Feature;

use App\Models\Exercise;
use App\Models\Set;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class ExerciseTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;

    protected function setUp(): void
    {
        parent::setUp();

        Artisan::call('db:seed');

        $this->user = User::factory()->create();
    }

    /** @test */
    public function exercise_can_be_created()
    {
        $workout = Workout::factory()
            ->for($this->user, 'owner')
            ->has(Set::factory())
            ->create();

        $set = $workout->sets->first();

        $attributes = Exercise::factory()
            ->raw([
                'set_id' => $set->id
            ]);

        $this
            ->actingAs($this->user)
            ->followingRedirects()
            ->post(route('exercises.store', $set), $attributes)
            ->assertStatus(Response::HTTP_OK);

        $this->assertDatabaseHas('exercises', $attributes);
    }
}
