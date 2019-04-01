<?php
$sequence = explode(" ", readline());
$specialBomb = explode(" ", readline());

$specialNumber = $specialBomb[0];
$power = $specialBomb[1];

$sum = 0;

$length = count($sequence);
for ($i = 0; $i < $length; $i++) {
    if (in_array($specialNumber, $sequence)) {
        $index = array_search($specialNumber, $sequence);
        array_splice($sequence, max(0, $index - $power), 2 * $power + 1);
    }
}
$count = count($sequence);
for ($i = 0; $i < $count; $i++) {
    $sum += $sequence[$i];
}
echo $sum;