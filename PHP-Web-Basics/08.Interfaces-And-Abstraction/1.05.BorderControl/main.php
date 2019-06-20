<?php

spl_autoload_register();

$citizensAndRobots = [];

while (true) {
    $input = readline();

    if ($input == "End") {
        break;
    }

    $arr = explode(" ", $input);

    if (count($arr) == 2) {
        $model = $arr[0];
        $id = $arr[1];

        $citizensAndRobots[] = new Robots($model, $id);
    } else {
        $name = $arr[0];
        $age = intval($arr[1]);
        $id = $arr[2];

        $citizensAndRobots[] = new Citizen($name, $age, $id);
    }
}

$searchingId = readline();

foreach ($citizensAndRobots as $citizensAndRobot) {
    echo $citizensAndRobot->getFakeId($searchingId);
}
