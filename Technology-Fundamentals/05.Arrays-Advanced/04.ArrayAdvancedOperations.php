<?php
$arr = explode(' ', readline());

while (true) {
    $input = readline();
    if ($input == "End") {
        break;
    }
    $tokens = explode(" ", $input);
    $command = $tokens[0];

    switch ($command) {
        case "Add":
            $number = $tokens[1];
            $arr[] = $number;
            break;
        case "Remove":
            $index = $tokens[1];
            if (isValid($arr, $index)) {
                array_splice($arr, $index, 1);
            } else {
                echo "Invalid index" . PHP_EOL;
            }
            break;
        case "Insert":
            $number = $tokens[1];
            $index = $tokens[2];
            if (isValid($arr, $index)) {
                array_splice($arr, $index, 0, $number);
            } else {
                echo "Invalid index" . PHP_EOL;
            }
            break;
        case "Shift":
            $position = $tokens[1];
            $number = $tokens[2];
            $arr = shift($arr, $position, $number);
    }
}

echo implode(" ", $arr);


function isValid(array $arr, int $index): bool
{
    if ($index >= 0 && $index < count($arr)) {
        return true;
    }
    return false;
}

function shift(array $arr, string $position, int $number)
{
    if ($position == "left") {
        for ($i = 0; $i < $number; $i++) {
            $temp = array_shift($arr);
            $arr[] = $temp;
        }
    } else {
        for ($i = 0; $i < $number; $i++) {
            $temp = array_pop($arr);
            array_unshift($arr, $temp);
        }
    }
    return $arr;
}