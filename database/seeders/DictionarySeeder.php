<?php

namespace Database\Seeders;

use App\Models\Dictionary;
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
        /** @var Dictionary $dictionary */
        $dictionary = Dictionary::query()->updateOrCreate([
            'title' => $this->dictionary
        ]);

        foreach ($this->items as $name => $value) {
            $dictionary->definitions()->updateOrCreate([
                'name' => $name
            ], [
                'value' => $value
            ]);
        }
    }
}
