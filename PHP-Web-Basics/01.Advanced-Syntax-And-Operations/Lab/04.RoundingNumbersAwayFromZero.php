<?php
$Integers = explode(" ", readline());

foreach ($Integers as $integer){
    $roundedInteger = round($integer);

    echo "$integer => $roundedInteger\n";
}