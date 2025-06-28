<?php

namespace Database\Factories;

use App\Models\Lead;
use App\Models\Resource;
use Illuminate\Database\Eloquent\Factories\Factory;

class LeadFactory extends Factory
{
    protected $model = Lead::class;

    public function definition(): array
    {
        return [
            'email' => $this->faker->unique()->safeEmail,
            'source' => $this->faker->randomElement(['resource_download', 'contact_form', 'booking']),
            'resource_id' => Resource::factory(), // Uncomment if you want to associate with a Resource

            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }
}