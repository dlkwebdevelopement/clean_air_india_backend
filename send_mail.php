<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// Read JSON payload from Node.js
$data = json_decode(file_get_contents("php://input"), true);

if (!isset($data['html']) || !isset($data['subject'])) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid data provided"]);
    exit;
}

$to = "connectcleanair@gmail.com"; 
$subject = $data['subject'];
$html = $data['html'];
$replyTo = $data['replyTo'] ?? 'noreply@cleanairindia.com';

// Setup email headers for HTML content
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// The From email should be a domain you own to avoid spam filters
$headers .= "From: noreply@cleanairindia.com\r\n";
$headers .= "Reply-To: " . $replyTo . "\r\n";

// Execute PHP core mail() function
if (mail($to, $subject, $html, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Email sent successfully via PHP mail()"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "PHP mail() failed to send the email"]);
}
?>
