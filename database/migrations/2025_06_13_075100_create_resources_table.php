<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('resources', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('category_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->string('slug');
            $table->text('description');
            $table->string('tool');
            $table->enum('resource_type', ['free', 'pro'])->default('free');
            $table->string('file_path');
            $table->string('thumbnail_path');
            $table->string('guide_url')->nullable();
            $table->string('video_url')->nullable();
            $table->integer('downloads_count')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resources');
    }
};