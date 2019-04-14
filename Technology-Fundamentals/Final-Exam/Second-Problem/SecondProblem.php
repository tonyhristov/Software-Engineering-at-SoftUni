<?php

$input = readline();

$stores = [];
while (true) {
    if ($input === "END") {
        break;
    }
    $args = explode("->", $input);
    $command = $args[0];
    $shop = $args[1];
    $product = $args[2];

    if ($command === "Add") {
        $items = explode(',', $product);
        foreach ($items as $item) {
            $stores[$shop][] = $item;
        }
    }
    if ($command === "Remove") {
        if (key_exists($shop, $stores)) {
            unset($stores[$shop]);
        }
    }
    $input = readline();
}
arsort($stores);
krsort($stores);
echo "Stores list:\n";
foreach ($stores as $shops => $items) {
    echo $shops . PHP_EOL;
    foreach ($items as $item) {
        echo "<<$item>>\n";
    }
}
