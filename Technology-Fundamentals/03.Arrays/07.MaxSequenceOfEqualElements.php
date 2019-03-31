<?php
$arr = explode(' ', readline());
$longest = [];
$count = count($arr);
$bestLen = 1;
$bestSymbol = 0;

for ($i = 0; $i < $count; $i++) {
    $length = 1;
    for ($j = $i + 1; $j < $count; $j++) {
        if ($arr[$i] === $arr[$j]) {
            $length++;
            if ($length > $bestLen) {
                $bestLen = $length;
                $bestSymbol = $arr[$i];
            }
        } else {
            break;
        }
    }
}
echo str_repeat($bestSymbol . ' ', $bestLen);
