<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExercisesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('exercises', function (Blueprint $table) {
            $table->id();

            $table->string('name')
                ->comment('Exercise name');

            $table->integer('repetitions')
                ->nullable()
                ->comment('Exercise repetitions');

            $table->integer('seconds')
                ->nullable()
                ->comment('Exercise work time in seconds');

            $table->boolean('per_side')
                ->default(false)
                ->comment('Determines if exercise is side based');

            $table->string('url')
                ->nullable()
                ->comment('Exercise url handle');

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
        Schema::dropIfExists('exercises');
    }
}
