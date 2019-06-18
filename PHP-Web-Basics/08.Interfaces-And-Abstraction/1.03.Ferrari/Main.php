<?php

spl_autoload_register();

class Main
{
    public function readData()
    {
        $driver = readline();
        $model = "488-Spider";
        $brakes = "Brakes!";
        $throttle = "Zadu6avam sA!";

        $ferrari = new Ferrari($driver, $model, $brakes, $throttle);
        echo $ferrari;
    }

    public function run()
    {
        $this->readData();
    }
}

$main = new Main();
$main->run();
