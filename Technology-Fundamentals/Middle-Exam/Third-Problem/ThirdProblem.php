<?php
$shops = explode(" ", readline());

$input = readline();

for ($i = 0; $i < $input; $i++) {
    $tokens = explode(" ", readline());
    $command = $tokens[0];


    switch ($command) {
        case "Include":
            $shops[] = $tokens[1];
            break;
        case"Visit":
            if ($tokens[1] === "first") {
                array_splice($shops, 0, $tokens[2]);
            } else {
                for ($i = 1; $i <= $tokens[2]; $i++) {
                    array_pop($shops);
                }
            }
            break;
        case "Place":
            array_splice($shops, $tokens[2] + 1, 0, $tokens[1]);
            break;
        case "Prefer":
            $itemOne = $tokens[1];
            $itemTwo = $tokens[2];
            $itemOneValue = array_search($itemOne, $shops);
            $itemTwoValue = array_search($itemTwo, $shops);

            $shopsPrefered[] = $itemOneValue;
            $itemOneValue = $itemTwoValue;
                $itemTwoValue = $shopsPrefered;


            break;
    }

    $input = readline();
}
echo "Shops left:\n";
echo implode(" ", $shops);