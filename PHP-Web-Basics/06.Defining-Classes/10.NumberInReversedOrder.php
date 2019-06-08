<?php

class ReversedNumber
{
    private $number;

    /**
     * ReversedNumber constructor.
     * @param $number
     */
    public function __construct($number)
    {
        $this->number = $number;
    }

    public function printReversed(): void
    {
        echo strrev($this->number);
//        Another way to solve the task.
//        for ($i = strlen($this->number) - 1; $i >= 0; $i--) {
//            echo $this->number[$i];
//        }
//        echo PHP_EOL;
    }
}

$num = new ReversedNumber(readline());
$num->printReversed();