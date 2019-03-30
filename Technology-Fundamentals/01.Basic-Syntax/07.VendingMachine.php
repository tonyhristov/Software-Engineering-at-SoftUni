<?php

$n = readline();
$sum = 0;
$price = 0;

while ($n != 'Start') {
    switch ($n) {
        case '0.1':
            $sum += (float)$n;
            break;
        case '0.2':
            $sum += (float)$n;
            break;
        case '0.5':
            $sum += (float)$n;
            break;
        case '1':
            $sum += (float)$n;
            break;
        case '2':
            $sum += (float)$n;
            break;
        default:
            printf('Cannot accept %s', $n);
            echo PHP_EOL;
    }

    $n = readline();
}

$m = readline();

while ($m != 'End') {
    switch ($m) {
        case 'Nuts':
            $price = (float)2.0;
            if ($price <= $sum) {
                $sum -= (float)2.0;
                printf('Purchased %s', strtolower($m));
                echo PHP_EOL;
            } else {
                echo 'Sorry, not enough money';
                echo PHP_EOL;
            }
            break;

        case 'Water':
            $price = (float)0.7;
            if ($price <= $sum) {
                $sum -= (float)0.7;
                printf('Purchased %s', strtolower($m));
                echo PHP_EOL;
            } else {
                echo 'Sorry, not enough money';
                echo PHP_EOL;
            }
            break;

        case 'Crisps':
            $price = (float)1.5;
            if ($price <= $sum) {
                $sum -= (float)1.5;
                printf('Purchased %s', strtolower($m));
                echo PHP_EOL;
            } else {
                echo 'Sorry, not enough money';
                echo PHP_EOL;
            }
            break;

        case 'Soda':
            $price = 0.7 + 0.1;
            if ($price <= $sum) {
                $sum -= (float)0.7 + 0.1;
                printf('Purchased %s', strtolower($m));
                echo PHP_EOL;
            } else {
                echo 'Sorry, not enough money';
                echo PHP_EOL;
            }
            break;
        case 'Coke':
            $price = (float)1.0;
            if ($price <= $sum) {
                $sum -= (float)1.0;
                printf('Purchased %s', strtolower($m));
                echo PHP_EOL;
            } else {
                echo 'Sorry, not enough money';
                echo PHP_EOL;
            }
            break;

        default:
            printf('Invalid product');
            echo PHP_EOL;
    }

    $m = readline();
}


printf('Change: %.2f', $sum);