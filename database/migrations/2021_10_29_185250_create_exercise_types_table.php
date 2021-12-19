<?php

use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExerciseTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exercise_types', function (Blueprint $table) {
            $table->uuid('id')
                ->primary();

            $table->foreignIdFor(User::class)
                ->comment('References the user')
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->string('name')
                ->comment('Exercise name');

            $table->boolean('per_side')
                ->default(false)
                ->comment('Determines if exercise is side based');

            $table->string('url')
                ->nullable()
                ->comment('Exercise url handle');

            $table->unique(['user_id', 'name']);

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('exercise_types');
    }
}
