<?php
$input = readline();

$courses = [];
while (true) {
    if ($input === "end") {
        break;
    }

    $args = explode(" : ", $input);
    $technology = $args[0];
    $student = $args[1];

    $courses[$technology][] = $student;

    $input = readline();
}
uksort($courses, function ($tech1, $tech2) use ($courses) {
    $count1 = count($courses[$tech1]);
    $count2 = count($courses[$tech2]);

    return $count2 <=> $count1;
});

foreach ($courses as $tech => $studArr) {
    asort($studArr);
    $count = count($studArr);
    echo $tech . ": " . $count . PHP_EOL;
    foreach ($studArr as $student) {
        echo "-- $student\n";
    }
}