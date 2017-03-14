<?php

$server = "localhost";
$user = "starlit2_test";
$pass = "phptestphp5000";
$dbname = "starlit2_php_test";

$conn = new mysqli($server, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

?>