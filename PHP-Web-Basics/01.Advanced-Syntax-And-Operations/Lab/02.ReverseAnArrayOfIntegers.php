<?php
$integers = [];

$count = readline();
for ($i = 0; $i < $count; $i++) {
    $integers[] = readline();
}

$integers = array_reverse($integers);

echo implode(" ", $integers);