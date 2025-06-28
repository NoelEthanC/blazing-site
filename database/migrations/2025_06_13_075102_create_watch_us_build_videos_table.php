<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('watch_us_build_videos', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('youtube_url');
            $table->string('youtube_id');
            $table->string('thumbnail_url')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('watch_us_build_videos');
    }
};