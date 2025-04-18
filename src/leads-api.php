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

    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validasi input
    $requiredFields = ['question1', 'question2', 'question3', 'nom', 'email', 'number'];
    foreach ($requiredFields as $field) {
        if (empty($input[$field])) {
            throw new Exception("Le champ $field est requis");
        }
    }

    if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
        throw new Exception("L'email n'est pas valide");
    }

    // Insert ke database
    $stmt = $pdo->prepare("
        INSERT INTO construction_forms 
        (question1, question2, question3, nom, email, number, submitted_at) 
        VALUES 
        (:question1, :question2, :question3, :nom, :email, :number, NOW())
    ");
    
    $stmt->execute([
        ':question1' => $input['question1'],
        ':question2' => $input['question2'],
        ':question3' => $input['question3'],
        ':nom' => htmlspecialchars($input['nom']),
        ':email' => filter_var($input['email'], FILTER_SANITIZE_EMAIL),
        ':number' => htmlspecialchars($input['number'])
    ]);


    echo json_encode([
        'success' => true,
        'message' => 'Merci! Votre formulaire a été soumis avec succès.'
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}