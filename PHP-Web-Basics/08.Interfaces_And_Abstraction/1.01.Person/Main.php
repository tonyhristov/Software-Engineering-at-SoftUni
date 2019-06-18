<?php

spl_autoload_register();

class Main
{
    public function readData()
    {
        $name = readline();
        $age = intval(readline());

        $citizen = new Citizen($name, $age);
        echo $citizen;
    }

    public function run()
    {
        $this->readData();
    }
}

$main = new Main();
$main->run();