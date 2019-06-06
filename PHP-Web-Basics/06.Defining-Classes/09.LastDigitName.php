<?php

class Number
{
    private $value;

    public function __construct(int $value)
    {
        $this->value = $value;
    }

    public function getLastDigit(): string
    {
        $lastDigit = $this->value % 10;

        switch ($lastDigit) {
            case 0:
                return "zero";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            default:
                return "nine";
        }
    }
}

$input = readline();
$number = new Number($input);
echo $number->getLastDigit();