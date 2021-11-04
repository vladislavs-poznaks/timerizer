<?php

namespace Tests\Feature;

use App\Models\Set;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Artisan;
use Tests\TestCase;

class SetTest extends TestCase
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
    public function set_can_be_created()
    {
        $workout = Workout::factory()
            ->for($this->user, 'owner')
            ->create();

        $attributes = Set::factory()
            ->for($workout)
            ->raw();

        $this
            ->actingAs($this->user)
            ->followingRedirects()
            ->post(route('sets.store', $workout), $attributes)
            ->assertStatus(Response::HTTP_OK);

        $this->assertDatabaseHas('sets', $attributes);
    }
}
