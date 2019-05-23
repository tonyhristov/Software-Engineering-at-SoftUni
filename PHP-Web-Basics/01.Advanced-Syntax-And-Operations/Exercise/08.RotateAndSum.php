<?php
$arr = explode(" ", readline());
$rotation = readline();

$result = array_fill(0, count($arr), 0);
for ($i = 0; $i < $rotation; $i++) {
    $lastNumber = array_pop($arr);
    array_unshift($arr, $lastNumber);

    for ($j = 0; $j < count($arr); $j++) {
        $result[$j] += $arr[$j];
    }
}

echo implode(" ", $result);
