<?php

$productsPrice = [];
$productsQuantity = [];

while (1) {
    $input = readline();
    if ($input === "buy") {
        break;
    }

    $tokens = explode(" ", $input);
    $productName = $tokens[0];
    $productPrice = $tokens[1];
    $productQuantity = $tokens[2];

    $productsPrice[$productName] = $productPrice;
    if (!key_exists($productName, $productsQuantity)) {
        $productsQuantity[$productName] = $productQuantity;
    } else {
        $productsQuantity[$productName] += $productQuantity;
    }
}

foreach ($productsPrice as $product => $price) {
    $sum = $price * $productsQuantity[$product];
    printf("$product -> %.2f" . PHP_EOL, $sum);
}