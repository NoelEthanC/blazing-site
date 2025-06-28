<?php

namespace Database\Factories;

use App\Models\ResourceDownload;
use App\Models\Resource;
use App\Models\Lead;
use Illuminate\Database\Eloquent\Factories\Factory;

class ResourceDownloadFactory extends Factory
{
    protected $model = ResourceDownload::class;

    public function definition(): array
    {
        $email = $this->faker->unique()->safeEmail;

        return [
            'resource_id' => Resource::factory(),
            'email' => $email,
            'download_method' => $this->faker->randomElement(['instant', 'email']),
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (ResourceDownload $download) {
            // Ensure associated Lead exists
            Lead::firstOrCreate(
                ['email' => $download->email],
                [
                    'source' => 'resource_download',
                    'created_at' => $download->created_at,
                ]
            );

            // Increment downloads_count on associated Resource
            $download->resource->incrementDownloads();
        });
    }
}