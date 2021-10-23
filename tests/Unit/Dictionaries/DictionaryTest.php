<?php

namespace Tests\Unit\Dictionaries;

use App\Models\Definition;
use App\Models\Dictionary;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class DictionaryTest extends TestCase
{
    use DatabaseTransactions;

    /** @test */
    public function dictionary_has_a_title()
    {
        $dictionary = Dictionary::factory()->make([
            'title' => 'test_title'
        ]);

        $this->assertEquals($dictionary->title, 'test_title');
    }

    /** @test */
    public function dictionary_can_have_multiple_definitions()
    {
        $dictionary = Dictionary::factory()
            ->has(Definition::factory()->count(5))
            ->create();

        $this->assertCount(5, $dictionary->definitions);
    }

    /** @test */
    public function dictionary_can_be_scoped_by_title()
    {
        Dictionary::factory()
            ->count(5)
            ->create();

        $dictionary = Dictionary::factory()
            ->create([
                'title' => 'test_title'
            ]);

        $this->assertCount(1, Dictionary::byTitle('test_title')->get());
    }
}
