<?php
$start = intval(readline());
$end = intval(readline());

$count = 0;
for ($i = $start; $i <= $end; $i++) {
    echo $i.' ';
    $count += $i;
}
echo PHP_EOL.'Sum: '.$count;
