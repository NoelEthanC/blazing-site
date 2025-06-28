<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('resource_downloads', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->foreignUuid('resource_id')
                ->constrained('resources')
                ->onDelete('cascade');
            $table->string('email');
            $table->enum('download_method', ['instant', 'email']);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('resource_downloads');
    }
};