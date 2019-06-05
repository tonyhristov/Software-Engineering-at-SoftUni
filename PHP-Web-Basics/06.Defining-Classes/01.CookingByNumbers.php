<?php
$number = readline();
$commands = explode(", ", readline());

$count = count($commands);
for ($i = 0; $i < $count; $i++) {
    $currentCommand = $commands[$i];
    switch ($currentCommand) {
        case "chop":
            $number /= 2;
            break;
        case "dice":
            $number = sqrt($number);
            break;
        case "spice":
            $number += 1;
            break;
        case "bake":
            $number *= 3;
            break;
        case "fillet":
            $number -= 0.2 * $number;
    }
    echo $number . PHP_EOL;
}

