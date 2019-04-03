<?php
$employees = [];

while (1) {
    $input = readline();
    if ($input === "End") {
        break;
    }
    $tokens = explode(" -> ", $input);
    $company = $tokens[0];
    $id = $tokens[1];

    $employees[$company][] = $id;
}
uksort($employees, function ($com1, $com2) use ($employees) {
    $count1 = count($employees[$com1]);
    $count2 = count($employees[$com2]);
    return $count1 <=> $count2;
});
ksort($employees);
foreach ($employees as $company => $workerArr) {
    asort($workerArr);
    echo $company . PHP_EOL;
    $sort = array_unique($workerArr);
    foreach ($sort as $worker) {
        echo "-- $worker\n";
    }
}
