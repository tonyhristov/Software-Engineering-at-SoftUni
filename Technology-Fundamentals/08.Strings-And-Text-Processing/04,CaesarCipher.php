<?php

$input = readline();

$output = '';
for ($i = 0; $i < strlen($input); $i++) {
    $crypted = ord($input[$i]) + 3;
    $decrypted = chr($crypted);
    $output .= $decrypted;
}

echo $output;