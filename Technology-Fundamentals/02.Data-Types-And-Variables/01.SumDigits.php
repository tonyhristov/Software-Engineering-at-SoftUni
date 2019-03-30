<?php
$digits = readline();
$length = strlen($digits);

$sum = 0;
for ($i = 0; $i <= $length; $i++) {
    $sum += $digits % 10; //$sum += digits[$length - $i -1]
    $digits /= 10;
}
echo $sum.PHP_EOL;
