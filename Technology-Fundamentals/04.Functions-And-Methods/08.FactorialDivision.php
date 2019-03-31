<?php
$number = intval(readline());
$divideNum = intval(readline());

$division = Factorial($number) / Factorial($divideNum);

echo sprintf("%.2f",$division);

function Factorial(int $num){

    $fact = 1;
    for ($i = $num; $i > 1; $i--){
        $fact *= $i ;
    }
    return $fact;
}