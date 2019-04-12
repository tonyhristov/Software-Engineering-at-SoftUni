<?php
$people = intval(readline());
$days = intval(readline());

$coins = 50 * $days;

for ($day = 1; $day <= $days; $day++) {

    if ($day % 10 == 0) {
        $people -= 2;
    }
    if ($day % 15 == 0) {
        $people += 5;
    }
    if ($day % 3 == 0) {
        $coins -= 3 * $people;
    }
    if ($day % 5 == 0) {
        $coins += 20 * $people;
        if ($day % 3 == 0) {
            $coins -= 2 * $people;
        }
    }
    $coins -= 2 * $people;
}
$coinsEach = intval($coins / $people);
echo "$people companions received $coinsEach coins each.";