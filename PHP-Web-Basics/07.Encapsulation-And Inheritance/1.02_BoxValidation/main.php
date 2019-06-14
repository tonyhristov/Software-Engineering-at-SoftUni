<?php
require_once "BoxValidation.php";

$length = floatval(readline());
$width = floatval(readline());
$height = floatval(readline());

try {
    $box = new BoxValidation($length, $width, $height);
    echo $box;
} catch (Exception $e) {
    echo $e->getMessage();
}