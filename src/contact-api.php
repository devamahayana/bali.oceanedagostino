<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Koneksi database
$host = 'srv1465.hstgr.io';
$dbname = 'u827570709_balioceaneDB';
$user = 'u827570709_balioceane';
$pass = '2Fd$HV&PmWc+';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Ambil data dari request
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validasi input
    if (empty($input['name']) || empty($input['email']) || empty($input['message'])) {
        throw new Exception('Semua field harus diisi');
    }

    // Insert ke database
    $stmt = $pdo->prepare("INSERT INTO contacts (name, email, message, created_at) VALUES (?, ?, ?, NOW())");
    $stmt->execute([
        $input['name'],
        $input['email'],
        $input['message']
    ]);

    echo json_encode(['success' => true, 'message' => 'Pesan berhasil dikirim']);
} catch (Exception $e) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}