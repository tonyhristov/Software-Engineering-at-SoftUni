<?php
require_once "Box.php";

$length = floatval(readline());
$width = floatval(readline());
$height = floatval(readline());

$box = new Box($length, $width, $height);
echo $box;