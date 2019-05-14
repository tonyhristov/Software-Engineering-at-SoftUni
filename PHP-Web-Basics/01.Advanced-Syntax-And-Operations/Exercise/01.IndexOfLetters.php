<?php
$alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
$word = strtolower(readline());
$count = strlen($word);

for ($i = 0; $i < $count; $i++) {
    $letter = $word[$i];
    $letterIndex = array_search($letter, $alphabet);

    echo "$letter -> $letterIndex\n";
}