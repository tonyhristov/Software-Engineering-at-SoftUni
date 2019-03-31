<?php
$count = intval(readline());
$arrOne = [];
$arrTwo = [];

for ($i = 0; $i < $count; $i++) {
    list($elementOne, $elementTwo) = explode(' ', readline());

    if ($i % 2 == 0) {
        $arrOne[] = $elementOne;
        $arrTwo[] = $elementTwo;
    } else {
        $arrOne[] = $elementTwo;
        $arrTwo[] = $elementOne;
    }
}
echo implode(' ', $arrOne) . PHP_EOL;
echo implode(' ', $arrTwo);
