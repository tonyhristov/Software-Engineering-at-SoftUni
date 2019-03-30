<?php
$group = readline();
$client = readline();
$day = readline();

$price = 0;
$groupPrice = $group * $price;
$newGroupPrice = 0;
switch ($client) {
    case 'Students':
        switch ($day) {
            case 'Friday':
                $price = 8.45;
                break;
            case 'Saturday':
                $price = 9.80;
                break;
            case 'Sunday':
                $price = 10.46;
                break;
        }
        break;
    case 'Business':
        switch ($day) {
            case 'Friday':
                $price = 10.90;
                break;
            case 'Saturday':
                $price = 15.60;
                break;
            case 'Sunday':
                $price = 16;

                break;
        }
        break;
    case 'Regular':
        switch ($day) {
            case 'Friday':
                $price = 15;
                break;
            case 'Saturday':
                $price = 20;
                break;
            case 'Sunday':
                $price = 22.50;
                break;
        }
        break;
}
if ($client == 'Students') {
    if ($group >= 30) {
        $newGroupPrice = ($group * $price) - (15 * ($group * $price));
        printf('Total price: %.2f', $newGroupPrice);
    } else {
        printf('Total price: %.2f', ($group * $price));
    }
}
if ($client == "Business") {
    if ($group >= 100) {
        $newGroupPrice = ($group * $price) - (10 * $price);
        printf('Total price: %.2f', $newGroupPrice);
    } else {
        printf('Total price: %.2f', ($group * $price));
    }
}
if ($client == 'Regular') {
    if ($group >= 10 && $group <= 20) {
        $newGroupPrice = ($group * $price) - (5 * ($group * $price));
        printf('Total price: %.2f', $newGroupPrice);
    } else {
        printf('Total price: %.2f', ($group * $price));
    }
}
