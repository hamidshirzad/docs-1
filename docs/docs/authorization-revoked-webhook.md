# OWN3D Authorization Revoked Webhook Documentation

## Introduction

The OWN3D Authorization Revoked Webhook notifies your application when a user revokes authorization for a platform or
their entire account. This documentation provides a detailed guide on how developers can implement the webhook and
validate the timestamp and signature using PHP without any framework.

## Table of Contents

1. [Webhook Overview](#webhook-overview)
2. [Webhook Payload](#webhook-payload)
3. [Security](#security)
4. [Implementation Steps](#implementation-steps)
5. [Example Code](#example-code)
6. [Error Handling](#error-handling)
7. [Testing](#testing)
8. [FAQs](#faqs)

## Webhook Overview

The webhook is triggered when a user revokes authorization for a platform or their entire account. OWN3D ID will send an
HTTP POST request to the configured webhook URL with the relevant payload.

## Webhook Payload

The payload sent to the webhook URL will be in one of the following formats:

### Platform Authorization Revoked

This payload is sent when a user revokes authorization for a specific platform.
Platforms include Streaming services like Twitch and YouTube.
Also, other services like Discord, TikTok and Facebook.

```json
{
  "type": "platform_authorization_revoked",
  "data": {
    "user_id": "example_user_id",
    "platform_id": "example_platform_id",
    "platform": "twitch"
  }
}
```

### Account Authorization Revoked

This payload is sent when a user revokes authorization for their entire account.

If OWN3D ID is your only OAuth client, you can use this event to delete the user's data from your system.

```json
{
  "type": "account_authorization_revoked",
  "data": {
    "user_id": "example_user_id",
    "client_id": "example_client_id"
  }
}
```

## Security

To ensure the security of the webhook, each request includes the following headers:

- `X-Signature`: A HMAC SHA-256 signature of the payload and timestamp.
- `X-Timestamp`: The UNIX timestamp of when the request was made.

The signature is generated using the client's secret. The timestamp ensures the request is recent and prevents replay
attacks.

## Implementation Steps

1. **Receive the Request**: Capture the incoming HTTP POST request and extract the headers and payload.
2. **Validate the Timestamp**: Check if the timestamp is within an acceptable range (e.g., 5 minutes).
3. **Generate the Signature**: Recreate the signature using the received payload and timestamp.
4. **Verify the Signature**: Compare the generated signature with the received signature to ensure authenticity.
5. **Process the Request**: If all validations pass, proceed with processing the authorization revocation request.

## Example Code

Below is an example implementation in PHP without any framework:

```php
<?php
// Configure your client secret
$clientSecret = 'your_client_secret';

// Function to validate the timestamp
function isValidTimestamp($timestamp, $tolerance = 300) {
    $currentTimestamp = time();
    return abs($currentTimestamp - $timestamp) <= $tolerance;
}

// Function to validate the signature
function isValidSignature($payload, $timestamp, $receivedSignature, $clientSecret) {
    $data = $timestamp . json_encode($payload);
    $calculatedSignature = hash_hmac('sha256', $data, $clientSecret);
    return hash_equals($calculatedSignature, $receivedSignature);
}

// Capture the incoming request
$headers = getallheaders();
$input = file_get_contents('php://input');
$payload = json_decode($input, true);

// Extract headers
$receivedSignature = $headers['X-Signature'] ?? '';
$timestamp = $headers['X-Timestamp'] ?? 0;

// Validate the timestamp
if (!isValidTimestamp($timestamp)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid timestamp']);
    exit;
}

// Validate the signature
if (!isValidSignature($payload, $timestamp, $receivedSignature, $clientSecret)) {
    http_response_code(403);
    echo json_encode(['error' => 'Invalid signature']);
    exit;
}

// Process the authorization revocation request
$type = $payload['type'];
$data = $payload['data'];
$userId = $data['user_id'];

if ($type === 'platform_authorization_revoked') {
    $platformId = $data['platform_id'];
    $platform = $data['platform'];
    // Implement your platform authorization revocation logic here
} elseif ($type === 'account_authorization_revoked') {
    $clientId = $data['client_id'];
    // Implement your account authorization revocation logic here
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid payload type']);
    exit;
}

http_response_code(200);
echo json_encode(['status' => 'success']);
?>
```

## Error Handling

Ensure that your implementation handles errors gracefully:

- **Invalid Timestamp**: Respond with HTTP 400 status and an error message.
- **Invalid Signature**: Respond with HTTP 403 status and an error message.
- **Invalid Payload Type**: Respond with HTTP 400 status and an error message.
- **Processing Errors**: Respond with HTTP 500 status and an error message.

## Testing

To test your implementation, you can use tools like Postman to send POST requests with the appropriate payload and
headers. Verify that your webhook correctly processes valid requests and handles invalid ones appropriately.

## FAQs

### How do I get the client secret?

The client secret is provided when you register your OAuth client with OWN3D.

### What if the request is not from OWN3D?

If the signature validation fails, you should reject the request with a 403 status code.

### Can I use a framework?

While this documentation provides a framework-less example, you can implement similar logic in any PHP framework by
following the same principles.

---

For further assistance, please contact OWN3D Developer support.