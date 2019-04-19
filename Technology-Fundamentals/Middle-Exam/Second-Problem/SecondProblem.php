<?php

$gifts = explode(" ", readline());
$input = readline();

while (true) {
    if ($input === "No Money") {
        break;
    }
    $args = explode(" ", $input);
    $command = $args[0];
    $product = $args[1];

    if ($command === "OutOfStock") {
        $token = in_array($product, $gifts);
        while ($token !== false) {
            if (isset($product, $gifts)) {
                $gift = array_search($product, $gifts);
                array_splice($gifts, $gift, 1);
                $token = in_array($product, $gifts);
            }
        }
    }

    if ($command === "Required") {
        if (array_key_exists($args[2], $gifts)) {
            array_splice($gifts, $args[2] - 1, 1, $product);
        }
    }
    if ($command === "JustInCase") {
        array_pop($gifts);
        $gifts[] = $product;
    }
    $input = readline();
}

echo implode(" ", $gifts);