<?php
// Database connection details
$servername = "localhost";
$username = "web_project";
$password = "AkhillSQL2023@";
$dbname = "jobhive";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the submitted username and password from the form
$user_input_username = $_POST['username'];
$user_input_password = $_POST['password'];

// Prepare and bind the SQL statement
$stmt = $conn->prepare("SELECT password FROM user WHERE username = ?");
$stmt->bind_param("s", $user_input_username);

// Execute the statement and store the result
$stmt->execute();
$stmt->store_result();

// Check if a user with the given username exists
if ($stmt->num_rows > 0) {
    // Bind the result to a variable
    $stmt->bind_result($stored_password);

    // Fetch the stored password
    $stmt->fetch();

    // Verify the submitted password against the stored password
    if (password_verify($user_input_password, $stored_password)) {
        // Password is correct, start a session and redirect to a protected page
        session_start();
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $user_input_username;
        header("Location: ../pages/home.html");
    } else {
        // Password is incorrect, display an error message
        echo "Incorrect password. Please try again.";
    }
} else {
    // No user found with the given username, display an error message
    echo "No user found with the given username.";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>

