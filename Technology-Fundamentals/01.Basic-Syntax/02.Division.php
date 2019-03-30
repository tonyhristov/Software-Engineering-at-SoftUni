<?php
$number = intval(readline());

if ($number % 10 == 0) {
    echo 'The number is divisible by 10';
}else if ($number % 7 == 0){
    echo 'The number is divisible by 7';
}else if ($number % 6 == 0){
    echo 'The number is divisible by 6';
}else if ($number % 3 == 0){
    echo 'The number is divisible by 3';
}else if ($number % 2 == 0 ){
    echo 'The number is divisible by 2';
}else {
    echo 'Not divisible';
}