<?php
$arr = explode(' ', readline());
$rotations = intval(readline());

$size = count($arr);

$newArr = [];
$rotations = $rotations % $size;
for ($i = $rotations; $i < $size; $i++) {
    $newArr[] = $arr[$i];

}
for ($i = 0; $i < $rotations; $i++) {
    $newArr[] = $arr[$i];
}

echo implode(' ', $newArr);