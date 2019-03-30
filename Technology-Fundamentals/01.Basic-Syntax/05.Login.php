<?php
$username = readline();

//$$pass = strrev ($username); ==
// ($pass = "";
//for ($i = $length; $i >= 0; $i--) {
// $pass .= $username[$i];
//})

$length = strlen($username);

$pass = "";
for ($i = $length; $i >= 0; $i--) {
    $pass .= $username[$i];
}
for ($i = 0; $i <= 3; $i++) {
    $input = readline();
    if ($pass == $input) {
        echo "User $username logged in." . PHP_EOL;
        break;
    } elseif ($i == 3) {
        echo "User $username blocked!";
    } else {
        echo 'Incorrect password. Try again.' . PHP_EOL;
    }
}