<?php
$wagons = intval(readline());
$people = [];

$sum = 0;
for ($i = 0; $i < $wagons; $i++) {
    $people[] = (int)readline();

    $sum += $people[$i];
    $peopleStr = implode(' ', $people);

}
echo $peopleStr . PHP_EOL;
echo $sum . PHP_EOL;

