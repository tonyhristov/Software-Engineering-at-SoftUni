<?php
$word = readline();

printMidChar($word);


function printMidChar(string $text)
{
    if (strlen($text) % 2 == 0) {
        echo $middle = $middle = substr($text, (strlen($text) / 2) - 1, 2);

    } else {
        echo $middle = substr($text, (strlen($text) / 2), 1);
    }
}