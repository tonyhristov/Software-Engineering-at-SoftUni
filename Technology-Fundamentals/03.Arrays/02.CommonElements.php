<?php
$firstArray = explode(' ', readline());
$secondArray = explode(' ', readline());

$common = [];

foreach ($secondArray as $element) {
    foreach ($firstArray as $elementTwo) {
        if ($element === $elementTwo) {
            $common[] = $elementTwo;
        }
    }
}
echo implode(' ', $common);
