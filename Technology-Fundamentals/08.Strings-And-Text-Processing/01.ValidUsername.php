<?php
$users = explode(", ", readline());

foreach ($users as $user) {
    $count = strlen($user);
    if ($count >= 3 && $count <= 16) {
        $isValid = true;
        for ($i = 0; $i < $count; $i++) {
            $currentChar = $user[$i];
            if (!(ctype_alnum($currentChar) || $currentChar === "_" || $currentChar === "-")) {
                $isValid = false;
                break;
            }
        }
        if ($isValid) {
            echo $user . PHP_EOL;
        }
    }
}