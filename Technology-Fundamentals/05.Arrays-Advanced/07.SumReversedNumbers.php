<?php
$arr = explode(" ", readline());

$count = count($arr);
for ($i = 0; $i < $count; $i++) {
    $arr[$i] = strrev($arr[$i]);
}

$sum = array_sum($arr);
echo $sum;