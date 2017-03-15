<?php

require ("login.php");

$firstname = $_POST["f_name"];
$lastname = $_POST["l_name"];
$nickname = null;
//29 of them (0-28)
$nick_array = array( 
    "The Best",
    "Grandpa",
    "Big Ol'",
    "Executor",
    "Librarian",
    "Second Hand",
    "Junior",
    "Knight",
    "Savage",
    "Warrior",
    "Deadly",
    "Dark One",
    "Freeloader",
    "Captain",
    "Just",
    "Admiral",
    "Baron",
    "Chief",
    "Elder",
    "Squire",
    "Grand Master",
    "Hearld",
    "Sir",
    "Sultan",
    "The Most Honourable",
    "The Right Honourable",
    "Tsar",
    "Sensei",
    "Zongshi",
);

function nickgen() {
    global $nickname;
    global $firstname;
    global $lastname;
    global $nick_array;

    $rand = rand(0,1);
    $rand2 = rand(0,28);

    $prefix = $nick_array[$rand2];

    if ($rand === 1) {
        $name = $firstname;
    }
    else {
        $name = $lastname;
    }
    $nickname = $prefix . " " . $name;
    
}

nickgen();

$conn = new mysqli($server, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql ="SELECT id FROM main";

if ($result = $conn->query($sql)) {
    $row_cnt = $result->num_rows;
    $result->close();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$sql = "INSERT INTO main (id,f_name,l_name,n_name) VALUES ($row_cnt,'$firstname','$lastname','$nickname')";

if ($conn->query($sql) === TRUE) {
    header("Location: http://starlitnightdesigns.com/phptest.php");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


echo $nickname;
?>