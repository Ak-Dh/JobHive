<?php
// Database connection details
$servername = "localhost";
$username = "web_project";
$password = "AkhillSQL2023@";
$dbname = "jobhive";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the submitted values from the form
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$user_input_username = $_POST['username'];
$user_input_password = $_POST['password'];

// Hash the password
$hashed_password = password_hash($user_input_password, PASSWORD_DEFAULT);

// Prepare and bind the SQL statement
$stmt = $conn->prepare("INSERT INTO user (id, first_name, last_name, email, password, username) VALUES ('1',?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $fname, $lname, $email, $hashed_password, $user_input_username);

// Execute the statement
if ($stmt->execute()) {
    // Redirect to the sign-in page
    header("Location: ../pages/home.html");
} else {
    // Display an error message
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
