<?php
$input = array_map('intval', explode(' ', readline()));

while (true) {
    $strings = readline();
    if ($strings == "end") {
        break;
    }

    $count = strlen($strings);
    for ($i = 0; $i < $count; $i++) {
        $index = $strings[0];
        array_splice($input, $index, 0, $strings);
        break;
    }
}
echo implode(" ", $input);