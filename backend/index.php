<?php
// Заголовки CORS для разрешения запросов с другого порта (например, с React)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Подключаемся к базе данных (замени на свои параметры)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "orders_db"; // Название базы данных

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Обработка POST-запроса
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $firstName = $data['firstName'];
    $lastName = $data['lastName'];
    $email = $data['email'];
    $phone = $data['phone'];
    $productName = $data['productName'];
    $productPrice = $data['productPrice'];
    $productDescription = $data['productDescription'];
    $productImage = $data['productImage'];

    // SQL-запрос на добавление данных в таблицу orders
    $sql = "INSERT INTO orders (first_name, last_name, email, phone, product_name, product_price, product_description, product_image) 
            VALUES ('$firstName', '$lastName', '$email', '$phone', '$productName', '$productPrice', '$productDescription', '$productImage')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "Order placed successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
    }
}

$conn->close();
?>
