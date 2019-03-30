<?php
$age = readline();

if ($age <= 2){
    echo 'baby';
}else if ($age <= 13){
    echo 'child';
}else if ($age <= 19){
    echo 'teenager';
}else if ($age <= 65){
    echo 'adult';
}else if($age>= 66){
    echo 'elder';
}