<?php
$numbers = explode(" ", readline());

$maxCount = 0;
$startIndex = 0;

for ($row = 0; $row < count($numbers); $row++) {
    $currentCount = 0;
    for ($col = $row; $col < count($numbers) - 1; $col++) {
        if ($numbers[$col] < $numbers[$col + 1]) {
            $currentCount++;
            if ($currentCount > $maxCount) {
                $maxCount = $currentCount;
                $startIndex = $row;
            }
        } else {
            break;
        }
    }
}

for ($i = 0; $i <= $maxCount; $i++) {
    echo $numbers[$startIndex + $i] . " ";
}