<?php
$train = array_map("intval", explode(" ", readline()));
$capacity = intval(readline());

while (true) {
    $input = readline();

    if ($input === "end") {
        break;
    }
    $args = explode(" ", $input);
    if ($args[0] === "Add") {
        $wagon = intval($args[1]);
        if ($wagon <= $capacity) {
            $train[] = $wagon;
        }
    } else {
        $people = intval($args[0]);
        $count = count($train);
        for ($i = 0; $i < $count; $i++) {
            if ($train[$i] + $people <= $capacity) {
                $train[$i] += $people;
            }
        }
    }
}
echo implode(' ', $train);