<?php
$case = readline();

$charValue = ord($case);

if ($charValue >= 65 && $charValue <= 90){
    echo "upper-case";
} else{
    echo "lower-case";
}