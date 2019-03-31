<?php
$one = readline();
$two = readline();
$three = readline();

printSmallest ($one,$two,$three);

function printSmallest (int $num1, int $num2, int $num3):void {
    $result = min($num1,$num2,$num3);
    echo $result.PHP_EOL;
}