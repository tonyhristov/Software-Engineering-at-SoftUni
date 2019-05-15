<?php
$n = readline();
$k = readline();

$numbers = array_fill(0, $n, 0);
$numbers[0] = 1;

for ($i = 0; $i < count($numbers); $i++) {
    $startIndex = max(0, $i - $k);
    $sum = 0;

    for ($j = $startIndex; $j <= $i; $j++) {
        $sum += $numbers[$j];
    }
    $numbers[$i] = $sum;
}

echo implode(" ", $numbers);