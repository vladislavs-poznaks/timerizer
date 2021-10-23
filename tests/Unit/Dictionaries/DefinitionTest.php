<?php

namespace Tests\Unit\Dictionaries;

use App\Models\Definition;
use App\Models\Dictionary;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class DefinitionTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function definition_has_a_name_and_value()
    {
        $dictionary = Definition::factory()->make([
            'name' => 'test',
            'value' => 1,
        ]);

        $this->assertEquals('test', $dictionary->name);
        $this->assertEquals(1, $dictionary->value);
    }

    /** @test */
    public function definition_belongs_to_a_dictionary()
    {
        $definition = Definition::factory()
            ->for(Dictionary::factory())
            ->create();

        $this->assertInstanceOf(Dictionary::class, $definition->dictionary);
    }

    /** @test */
    public function definition_can_be_scoped_by_one_name()
    {
        $dictionary = Dictionary::factory()
            ->has(Definition::factory()->count(5))
            ->create();

        $definition = Definition::factory()
            ->for($dictionary)
            ->create([
                'name' => 'test',
                'value' => 99
            ]);

        $this->assertCount(1, Definition::byName('test')->get());

        $this->assertEquals($definition->name, Definition::byName('test')->sole()->name);
        $this->assertEquals($definition->value, Definition::byName('test')->sole()->value);
    }


    /** @test */
    public function definition_can_be_scoped_by_multiple_names()
    {
        Dictionary::factory()
            ->has(Definition::factory()->count(5))
            ->has(Definition::factory()->state([
                'name' => 'test'
            ]))
            ->create();

        Dictionary::factory()
            ->has(Definition::factory()->count(5))
            ->has(Definition::factory()->state([
                'name' => 'some'
            ]))
            ->create();

        $this->assertCount(2, Definition::byName(['some', 'test'])->get());

        $this->assertCount(1, Definition::byName(['test', 'something_else'])->get());
    }

    /** @test */
    public function definition_can_be_scoped_within_a_dictionary()
    {
        Dictionary::factory()
            ->has(Definition::factory()->count(5))
            ->has(Definition::factory()->state([
                'name' => 'test'
            ]))
            ->create([
                'title' => 'some'
            ]);

        Dictionary::factory()
            ->has(Definition::factory()->count(5))
            ->has(Definition::factory()->state([
                'name' => 'test'
            ]))
            ->create();

        $this->assertCount(2, Definition::byName('test')->get());
        $this->assertCount(1, Definition::inDictionary('some')->byName('test')->get());
    }
}
