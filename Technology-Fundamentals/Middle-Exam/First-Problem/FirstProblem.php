<?php

$budget = floatval(readline());
$kgFlour = floatval(readline());

$eggs = $kgFlour * 0.75;
$milkL = $kgFlour + ($kgFlour * 0.25);
$milkMl = $milkL * 0.25;

$priceForOneCozonac = $kgFlour + $eggs + $milkMl;

$coloredEggs = 0;
$madeCozonacs = 0;

while ($budget >= $priceForOneCozonac) {
    $budget -= $priceForOneCozonac;
    $coloredEggs += 3;
    $madeCozonacs++;

    if ($madeCozonacs % 3 === 0) {
        $subtractEggs = $madeCozonacs - 2;
        $coloredEggs -= $subtractEggs;
    }

}
printf("You made $madeCozonacs cozonacs! Now you have $coloredEggs eggs and %.2fBGN left.", $budget);
