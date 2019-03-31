<?php
$word = strtolower(readline());


function Vowels(string $text): int
{
    $count = 0;
    $size = strlen($text);
    for ($i = 0; $i < $size; $i++) {
        $current = $text[$i];
        if ($current == "a" || $current == "o" || $current == "u" || $current == "i" || $current == "e"){
            $count++;
        }
    }

    return $count;
}
echo Vowels($word);