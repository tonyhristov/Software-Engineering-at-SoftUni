<?php
$number = readline();

$numbersArr = [];
$numbersCount = 0;
for ($i = 0; $i < strlen($number); $i++) {
    $numbersArr[] = $number[$i];
    $numbersCount++;
}

for ($i = 0; $i < $numbersCount; $i++) {
    $averageValue = array_sum($numbersArr) / $numbersCount;

    if ($averageValue < 5) {
        $number .= 9;
        $numbersArr[] = 9;
        $numbersCount++;
    }
}
echo $number;