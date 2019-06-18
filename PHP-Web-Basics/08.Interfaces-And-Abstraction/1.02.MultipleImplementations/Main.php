<?php

spl_autoload_register();

class Main
{
    public function readData()
    {
        $name = readline();
        $age = intval(readline());
        $id = readline();
        $birthday = readline();

        $townsman = new Townsman($name, $age, $id, $birthday);
        echo $townsman;
    }

    public function run()
    {
        $this->readData();
    }
}

$main = new Main();
$main->run();
