<?php

namespace App\Console\Commands;

use App\Models\Resource;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use Carbon\Carbon;
class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap:generate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate the sitemap for the Blazing Automations site';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $sitemap = Sitemap::create()
            ->add(Url::create('/')->setPriority(1.0))
            ->add(Url::create('/about')->setPriority(0.8))
            ->add(Url::create('/resources')->setPriority(0.9));

        // Dynamically add all resources
        Resource::all()->each(function ($resource) use ($sitemap) {
            $sitemap->add(
                Url::create("/resources/{$resource->slug}")
                    ->setLastModificationDate($resource->updated_at ?? Carbon::now())
                    ->setPriority(0.7)
            );
        });

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('✅ Sitemap generated successfully!');

        try {
            Http::get("https://www.google.com/ping?sitemap={$sitemapUrl}");
            Http::get("https://www.bing.com/ping?sitemap={$sitemapUrl}");

            $this->info('✅ Notified Google and Bing.');

        } catch (\Exception $e) {
            $this->error("❌ Failed to notify search engines: " . $e->getMessage());
        }
    }
}
