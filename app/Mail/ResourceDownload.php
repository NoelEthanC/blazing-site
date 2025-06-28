<?php

namespace App\Mail;

use App\Models\Resource;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;

class ResourceDownload extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public $resource;
    public $downloadUrl;

    public function __construct(Resource $resource)
    {
        $this->resource = $resource;
        $this->downloadUrl = Storage::temporaryUrl(
            $resource->file_path,
            now()->addDays(7)
        );
    }

    public function build()
    {
        return $this->subject('Your Resource Download: ' . $this->resource->title)
            ->view('emails.resource-download')
            ->with([
                'resourceTitle' => $this->resource->title,
                'resourceDescription' => $this->resource->description,
                'downloadUrl' => $this->downloadUrl,
                'expiresAt' => now()->addDays(7)->format('M j, Y')
            ]);
    }
}
