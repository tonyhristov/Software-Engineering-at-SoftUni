<?php
$rooms = explode("|", readline());
$count = count($rooms);

$health = 100;
$coins = 0;

for ($i = 0; $i < $count; $i++) {
    $command = explode(" ", $rooms[$i]);
    $itemOrMonster = $command[0];
    $number = $command[1];


    if ($itemOrMonster === "potion") {
        if ($health + $number > 100) {
            $healed = 100 - $health;
            $health = 100;
            echo "You healed for $healed hp.\n";
        } else {
            $health += $number;
            echo "You healed for $number hp.\n";
        }
        echo "Current health: $health hp.\n";
    } else if ($itemOrMonster === "chest") {
        $coins += $number;
        echo "You found $number coins.\n";
    } else {
        if (($health - $number) > 0) {
            $health -= $number;
            echo "You slayed $itemOrMonster.\n";
        } else {
            $health -= $number;
            echo "You died! Killed by $itemOrMonster.\n";
            $index = $i + 1;
            echo "Best room: $index\n";
            break;
        }
    }
}
if ($health > 0) {
    echo "You've made it!
Coins: $coins
Health: $health\n";
}