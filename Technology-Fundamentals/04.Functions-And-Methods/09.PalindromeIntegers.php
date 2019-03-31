<?php
$number = readline();

printPALIDROME($number);

function printPALIDROME($n)
{
    while ($n !== "END") {
        if (strrev($n) == $n) {
            echo "true" . PHP_EOL;
        } else {
            echo "false" . PHP_EOL;
        }
        $n = readline();
    }

}