<?php
$type = readline();

$assortment = [];
while (true) {
    if ($type === "stop") {
        break;
    }
    $value = readline();
    if (!key_exists($type, $assortment)) {
        $assortment[$type] = $value;
    } else {
        $assortment[$type] += $value;
    }
    $type = readline();
}

foreach ($assortment as $type => $karats) {
    echo $type . " -> " . $karats . "K" . PHP_EOL;
}