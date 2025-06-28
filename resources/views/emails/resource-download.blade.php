<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Your Resource Download</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
            border-bottom: 2px solid #f0f0f0;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
        }
        .content {
            padding: 20px 0;
        }
        .download-button {
            display: inline-block;
            background-color: #2563eb;
            color: white;
            padding: 15px 30px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            margin: 20px 0;
        }
        .resource-info {
            background-color: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            border-top: 1px solid #e5e7eb;
            margin-top: 40px;
            color: #6b7280;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">Blazing Automations</div>
    </div>

    <div class="content">
        <h1>Your Template is Ready!</h1>
        
        <p>Thank you for your interest in our Templates. Your download is ready and waiting for you.</p>

        <div class="resource-info">
            <h3>{{ $resourceTitle }}</h3>
            <p>{{ $resourceDescription }}</p>
        </div>

        <div style="text-align: center;">
            <a href="{{ $downloadUrl }}" class="download-button">
                Download Now
            </a>
        </div>

        <p><strong>Important:</strong> This download link will expire on {{ $expiresAt }}. Please download your resource before then.</p>

        <p>If you have any questions or need assistance, please don't hesitate to contact our support team.</p>

        <p>Best regards,<br>Noel Ethan - Blazing Automations</p>
    </div>

    <div class="footer">
        <p>This email was sent because you requested a resource download from our website.</p>
        <p>© {{ date('Y') }} Blazing Automations. All rights reserved.</p>
    </div>
</body>
</html>
