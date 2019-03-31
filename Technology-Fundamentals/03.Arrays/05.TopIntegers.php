<?php
$arr = explode(' ', readline());
$topInt = [];

$count = count($arr);
for ($i = 0; $i < $count; $i++) {
    $isTop = true;
    for ($j = $i + 1; $j < $count; $j++) {
        if ($arr[$i] <= $arr[$j]) {
            $isTop = false;
            break;
        }
    }
    if ($isTop) {
        $topInt[] = $arr[$i];
    }
}
echo implode(' ', $topInt);