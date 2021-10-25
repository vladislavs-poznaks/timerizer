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

            $table->smallInteger('type')
                ->comment('Set type by dictionary');

            $table->integer('seconds')
                ->nullable()
                ->comment('Duration of set if time based');

            $table->smallInteger('count')
                ->nullable()
                ->comment('Set count if count based');

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
