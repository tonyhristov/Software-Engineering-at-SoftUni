<?php
$companies = [];

while (1) {
    $input = readline();
    if ($input === "End") {
        break;
    }
    $tokens = explode(" -> ", $input);
    $company = $tokens[0];
    $id = $tokens[1];
    if (!key_exists($company, $companies)) {
        $companies[$company] = [];
    } elseif (in_array($id, $companies[$company])) {
        continue;
    }
    $companies[$company][] = $id;
}
ksort($companies);
foreach ($companies as $company => $workerArr) {
    echo $company . PHP_EOL;
    foreach ($workerArr as $worker) {
        echo "-- $worker\n";
    }
}
