<?php
$input = readline();
$n = str_split($input);
$sum = 0;

for ($i = 0; $i < count($n); $i++) {
    $curSum = 1;
    for ($j = 1; $j <= intval($n[$i]); $j++){
        $curSum *= $j;
    }
    $sum += $curSum;

}
if ($sum == intval($input)) {
    echo 'yes';
} else {
    echo 'no';
}