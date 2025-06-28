<?php

namespace Database\Factories;

use App\Models\Resource;
use App\Models\Category;
use App\Models\Lead;
use App\Models\ResourceDownload;
use Illuminate\Database\Eloquent\Factories\Factory;

class ResourceFactory extends Factory
{
    protected $model = Resource::class;

    public function definition(): array
    {
        $title = $this->faker->sentence(3);
        $tools = ['n8n', 'Zapier', 'Make.com', 'Airtable', 'HubSpot', 'OpenAI', 'Anthropic', 'Other'];
        $resourceTypes = ['free', 'pro'];

        return [
            'title' => $title,
            'slug' => \Str::slug($title),
            'description' => $this->faker->paragraph,
            'tool' => $this->faker->randomElement($tools),
            'resource_type' => $this->faker->randomElement($resourceTypes),
            'file_path' => $this->faker->filePath(),
            'thumbnail_path' => $this->faker->imageUrl(200, 120),
            'guide_url' => $this->faker->optional()->url,
            'video_url' => $this->faker->optional()->url,
            'downloads_count' => $this->faker->numberBetween(0, 1000),
            'category_id' => Category::factory(),
            // 'tags' => implode(',', $this->faker->words(3)),
            'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
            'updated_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
        ];
    }

    public function configure()
    {
        return $this->afterCreating(function (Resource $resource) {
            // Create associated ResourceDownloads and Leads
            $downloadsCount = $this->faker->numberBetween(0, 5);
            for ($i = 0; $i < $downloadsCount; $i++) {
                $email = $this->faker->unique()->safeEmail;

                // Create Lead
                Lead::firstOrCreate(
                    ['email' => $email],
                    [
                        'source' => 'resource_download',
                        'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
                    ]
                );

                // Create ResourceDownload
                ResourceDownload::create([
                    'resource_id' => $resource->id,
                    'email' => $email,
                    'download_method' => $this->faker->randomElement(['instant', 'email']),
                    'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
                ]);
            }
        });
    }
}