<?php
$n = intval(readline());

$num = 1;
for ($i = 0; $i < $n; $i++) {
    for ($j = 0; $j <= $i; $j++) {
        echo $num . " ";
    }
    $num +=  1;
    echo PHP_EOL;
}
