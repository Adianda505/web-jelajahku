<?php
// Koneksi ke database
$host = "localhost";
$dbname = "jelajahku";
$user = "root";
$pass = ""; // atau sesuaikan

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Tangkap data dari POST
$nama = $_POST['nama'];
$email = $_POST['email'];
$nohp = $_POST['nohp'];
$password = $_POST['password'];
$ulangiPassword = $_POST['ulangiPassword'];

// Validasi
if ($password !== $ulangiPassword) {
    echo json_encode(["status" => "error", "message" => "Password tidak cocok!"]);
    exit;
}

// Hash password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Simpan ke database
$stmt = $conn->prepare("INSERT INTO users (nama, email, nohp, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nama, $email, $nohp, $hashedPassword);

if ($stmt->execute()) {
    echo json_encode(["status" => "success", "message" => "Akun berhasil dibuat"]);
} else {
    echo json_encode(["status" => "error", "message" => "Gagal membuat akun: " . $stmt->error]);
}

$stmt->close();
$conn->close();
?>
