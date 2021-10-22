<?php

namespace Database\Seeders;

use App\Models\DictionaryList;
use Illuminate\Database\Seeder;

class DictionarySeeder extends Seeder
{
    /**
     * Dictionary title
     *
     * @var string $dictionary
     */
    protected string $dictionary;

    /**
     * Dictionary items
     *
     * @var array $items
     */
    protected array $items = [];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        $dictionary = DictionaryList::query()->updateOrCreate([
            'title' => $this->dictionary
        ]);

        foreach ($this->items as $name => $value) {
            $dictionary->items()->updateOrCreate([
                'name' => $name
            ], [
                'value' => $value
            ]);
        }
    }
}
