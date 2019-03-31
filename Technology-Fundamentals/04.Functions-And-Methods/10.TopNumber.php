<?php

$n = intval(readline());
$wholeNum = '';
$res = 0;
$arr = [];
for ($i = 1; $i <= $n; $i++) {
    $wholeNum.= "$i ";
}

$arr = explode(" ", $wholeNum);

foreach ($arr as $value) {
    $oddDigit = false;
    $res = sum($value, $oddDigit);
    $value = (int) $value;
    if ($oddDigit) {
        if ($res % 8 == 0) {
            echo $value . PHP_EOL;
        }
    }
}

function sum($num, &$oddDigit) {
    $sum = 0;
    for ($i = 0; $i < strlen($num); $i++) {
        $sum += $num[$i];
        if ($num[$i] % 2 != 0) {
            $oddDigit = true;
        }
    }
    return (int) $sum;
}