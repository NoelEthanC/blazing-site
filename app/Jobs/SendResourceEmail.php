<?php

namespace App\Jobs;

use App\Models\Resource;
use App\Mail\ResourceDownload;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class SendResourceEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $email;
    public $resource;

    public function __construct(string $email, Resource $resource)
    {
        $this->email = $email;
        $this->resource = $resource;
    }

    public function handle()
    {
        Mail::to($this->email)->send(new ResourceDownload($this->resource));
    }

    public function failed(\Throwable $exception)
    {
        // Log the failure
        \Log::error('Failed to send resource email', [
            'email' => $this->email,
            'resource_id' => $this->resource->id,
            'error' => $exception->getMessage()
        ]);
    }
}
