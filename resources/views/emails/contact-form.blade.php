<h2>New Contact Message</h2>
<p><strong>Name:</strong> {{ $data['name'] }}</p>
<p><strong>Email:</strong> {{ $data['email'] }}</p>
<p><strong>Message:</strong><br>{{ nl2br(e($data['message'])) }}</p>
