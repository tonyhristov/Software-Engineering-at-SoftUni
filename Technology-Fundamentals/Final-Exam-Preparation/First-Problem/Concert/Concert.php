<?php

$input = readline();

$bands = [];
$playTime = [];

$totalTime = 0;
while (true) {
    if ($input === "start of concert") {
        break;
    }
    $args = explode("; ", $input);
    $command = $args[0];
    $band = $args[1];

    switch ($command) {
        case "Add":
            $members = explode(", ", $args[2]);
            foreach ($members as $member) {
                $bands[$band][$member] = $member;
            }
            break;
        case"Play":
            $time = $args[2];
            $totalTime += $time;
            if (!key_exists($band, $playTime)) {
                $playTime[$band] = $time;
            } else {
                $playTime[$band] += $time;
            }
            break;
    }
    $input = readline();
}
ksort($playTime);
arsort($playTime);
echo "Total time: $totalTime\n";
foreach ($playTime as $band => $bandTime) {
    echo "$band -> $bandTime\n";
}

$bandToDisplay = readline();
echo $bandToDisplay . PHP_EOL;
foreach ($bands[$bandToDisplay] as $member) {
    echo "=> $member\n";
}