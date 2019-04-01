<?php
$times = readline();

$people = [];
for ($i = 0; $i < $times; $i++) {
    $command = explode(" ", readline());
    $person = $command[0];

    switch ($command[2]) {
        case "going!":
            if (in_array($person, $people)) {
                echo $person . " is already in the list!" . PHP_EOL;
            } else {
                $people[] = $person;
            }
            break;
        case "not":
            $index = array_search($person, $people);
            if ($index !== false) {
                array_splice($people, $index, 1);
            } else {
                echo $person[0] . " is not in the list!" . PHP_EOL;
            }
            break;
    }

}
$count = count($people);
for ($i = 0; $i < $count; $i++) {
    echo implode("\n", $people);
}







