<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;

    public function withName(string $name): static
    {
        return $this->state(fn() => [
            'name' => $name,
            'slug' => \Str::slug($name),
        ]);
    }

    public function definition(): array
    {
        $name = $this->faker->word;


        return [
            'name' => $name,
            'slug' => \Str::slug($name),
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}