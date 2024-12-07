<?php
$serverName = "localhost"; // Вказати ваш сервер
$connectionOptions = array(
    "Database" => "BooksDb", // Назва вашої бази даних
    "Uid" => "your_username", // Ваш логін для SQL
    "PWD" => "your_password"  // Ваш пароль
);

// Підключення до бази даних
$conn = sqlsrv_connect($serverName, $connectionOptions);

if (!$conn) {
    die(print_r(sqlsrv_errors(), true));
}
?>
<?php
header('Content-Type: application/json');
include('db.php'); // Підключення до бази даних

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Отримуємо дані з форми
    $title = $_POST['title'];
    $content = $_POST['content'];
    $author = $_POST['author'];

    // Завантаження обкладинки
    $coverPath = 'uploads/' . $_FILES['cover']['name'];
    move_uploaded_file($_FILES['cover']['tmp_name'], $coverPath);

    // Запит до бази даних
    $query = "INSERT INTO Books (Title, Content, Author, Cover) VALUES (?, ?, ?, ?)";
    $params = array($title, $content, $author, $coverPath);
    $stmt = sqlsrv_query($conn, $query, $params);

    if ($stmt) {
        echo json_encode(['status' => 'success', 'message' => 'Книга успішно додана']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Не вдалося додати книгу']);
    }
}
?>
<?php
header('Content-Type: application/json');
include('db.php'); // Підключення до бази даних

$bookId = $_GET['id'];
$query = "SELECT * FROM Books WHERE Id = ?";
$params = array($bookId);
$stmt = sqlsrv_query($conn, $query, $params);

$book = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);

echo json_encode($book);
?>
<?php
header('Content-Type: application/json');
include('db.php'); // Підключення до бази даних

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Отримуємо дані з форми
    $title = $_POST['title'];
    $content = $_POST['content'];
    $author = $_POST['author'];

    // Завантаження обкладинки
    $coverPath = 'uploads/' . $_FILES['cover']['name'];
    move_uploaded_file($_FILES['cover']['tmp_name'], $coverPath);

    // Запит до бази даних
    $query = "INSERT INTO Books (Title, Content, Author, Cover) VALUES (?, ?, ?, ?)";
    $params = array($title, $content, $author, $coverPath);
    $stmt = sqlsrv_query($conn, $query, $params);

    if ($stmt) {
        echo json_encode(['status' => 'success', 'message' => 'Книга успішно додана']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Не вдалося додати книгу']);
    }
}
?>
