<?php
$num1 = intval(readline());
$num2 = intval(readline());
$subtract = intval(readline());

printSub($num1, $num2, $subtract);

function printSub($n1, $n2, $s)
{
    $sum = $n1 + $n2;
    $sub = $sum - $s;
    echo $sub;
}