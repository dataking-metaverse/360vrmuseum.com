<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;


class ContactFormEmail extends Mailable
{
    use Queueable, SerializesModels;

    private $entry;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(array $entry) {
        $this->entry = [
            'name' => $entry['name'],
            'email' => $entry['email'],
            'subject' => $entry['subject'],
            'content' => $entry['content'],
        ];
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->markdown('vendor.mail.contact-form-email')
            ->subject('Contact form Submission from 360vrmuseum.com')
            ->with([
                'name' => $this->entry['name'],
                'email' => $this->entry['email'],
                'subject' => $this->entry['subject'],
                'content' => $this->entry['content'],
            ]);
    }
}
