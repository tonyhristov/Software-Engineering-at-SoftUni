<?php
require_once "Book.php";
require_once "GoldenEditionBook.php";

$author = strval(readline());
$title = strval(readline());
$price = intval(readline());
$type = strval(readline());

try {
    echo $book = new GoldenEditionBook($author, $title, $price, $type);
} catch (Exception $e) {
    echo $e->getMessage();
}
