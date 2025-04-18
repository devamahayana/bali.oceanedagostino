<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = 'srv1465.hstgr.io';
$db   = 'u827570709_balioceaneDB';
$user = 'u827570709_balioceaneDB';
$pass = '2Fd$HV&PmWc+';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    
    $stmt = $pdo->query('SELECT * FROM contacts');
    $data = $stmt->fetchAll();
    
    echo json_encode($data);
} catch (\PDOException $e) {
    echo json_encode(['error' => $e->getMessage()]);
}