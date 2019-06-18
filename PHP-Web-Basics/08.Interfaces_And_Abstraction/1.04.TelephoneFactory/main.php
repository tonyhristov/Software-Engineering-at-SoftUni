<?php

spl_autoload_register();

$numbers = explode(" ", readline());
$urls = explode(" ", readline());

$phone = new SmartPhone();
foreach ($numbers as $number) {
    try {
        echo $phone->call($number);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

foreach ($urls as $url) {
    try {
        echo $phone->browse($url);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}
