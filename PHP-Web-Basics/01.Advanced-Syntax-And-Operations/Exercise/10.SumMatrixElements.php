<?php
$matrixSize = explode(", ", readline());

$row = $matrixSize[0];
$col = $matrixSize[1];

$sum = 0;
for ($i = 0; $i < $row; $i++) {
    $element = explode(", ", readline());
    $sum += array_sum($element);
}

echo $row . PHP_EOL;
echo $col . PHP_EOL;
echo $sum . PHP_EOL;