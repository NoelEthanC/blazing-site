<?php

namespace Database\Seeders;

use App\Models\Resource;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Noel Ethan',
        //     'email' => 'noelethan.ch@gmail.com',
        // ]);

        // // Uncomment the following line to seed the database with resources
        // Resource::factory(50)->create();
        // // Uncomment the following line to seed the database with categories
        \App\Models\Category::factory(5)->create();
        // // Uncomment the following line to seed the database with leads
        // \App\Models\Lead::factory(20)->create();
        // // Uncomment the following line to seed the database with resource downloads
        // \App\Models\ResourceDownload::factory(30)->create();
    }
}
