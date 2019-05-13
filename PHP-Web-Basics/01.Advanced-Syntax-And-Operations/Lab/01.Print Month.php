<?php
$months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

$month = readline();

switch ($month) {
    case "1":
        echo $months[0];
        break;
    case "2":
        echo $months[1];
        break;
    case "3":
        echo $months[2];
        break;
    case "4":
        echo $months[3];
        break;
    case "5":
        echo $months[4];
        break;
    case "6":
        echo $months[5];
        break;
    case "7":
        echo $months[6];
        break;
    case "8":
        echo $months[7];
        break;
    case "9":
        echo $months[8];
        break;
    case "10":
        echo $months[9];
        break;
    case "11":
        echo $months[10];
        break;
    case "12":
        echo $months[11];
        break;
    default:
        echo "Invalid Month!";
}