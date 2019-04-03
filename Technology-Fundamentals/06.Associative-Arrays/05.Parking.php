<?php
$n = readline();
$licencePlates = [];

for ($i = 0; $i < $n; $i++) {
    $input = explode(" ", readline());
    $command = $input[0];
    $name = $input[1];
    $licence = $input[2];

    if ($command === "register") {
        if (!key_exists($name, $licencePlates)) {
            $licencePlates[$name] = $licence;
            echo "$name registered $licence successfully\n";
        } else {
            echo "ERROR: already registered with plate number $licence\n";
        }
    }
    if ($command === "unregister") {
        if (key_exists($name, $licencePlates)) {
            unset($licencePlates[$name]);
            echo "$name unregistered successfully\n";
        } else {
            echo "ERROR: user $name not found\n";
        }
    }
}

foreach ($licencePlates as $name => $licence) {
    echo $name . " => " . $licence . PHP_EOL;

}
