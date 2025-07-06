<?php

namespace App\Jobs;

use App\Mail\ContactFormSubmitted;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Queue\Queueable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Mail;

class SendContactFormEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;


    public $name;
    public $email;
    public $message;
    /**
     * Create a new job instance.
     */
    public function __construct(string $name, string $email, string $message)
    {
        $this->name = $name;
        $this->email = $email;
        $this->message = $message;

    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        // Mail::to()
        $data = ['name' => $this->name, 'email' => $this->email, 'message' => $this->message];
        Mail::to(config('mail.from.address'))->send(new ContactFormSubmitted($data));
    }

    public function failed(\Throwable $exception)
    {
        // Log the failure
        \Log::error('Failed to send contact form email', [
            'email' => $this->email,
            'name' => $this->name,
            'error' => $exception->getMessage()
        ]);
    }
}
