<?php

use App\Models\Workout;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sets', function (Blueprint $table) {
            $table->id();

            $table->foreignIdFor(Workout::class)
                ->comment('References the workout')
                ->constrained()
                ->cascadeOnUpdate()
                ->cascadeOnDelete();

            $table->string('title')
                ->comment('Set title');

            $table->smallInteger('type')
                ->comment('Set type by dictionary');

            $table->smallInteger('rounds')
                ->nullable()
                ->comment('Set rounds if count based');

            $table->integer('total_seconds')
                ->nullable()
                ->comment('Duration of set if time based');

            $table->integer('work_seconds')
                ->nullable()
                ->comment('Work time for TABATA sets');

            $table->integer('rest_seconds')
                ->nullable()
                ->comment('Rest time for TABATA sets');

            $table->text('description')
                ->nullable()
                ->comment('Set description');

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
        Schema::dropIfExists('sets');
    }
}
