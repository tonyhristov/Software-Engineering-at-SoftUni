<?php

class GoldenEditionBook extends Book
{
    public function changePrice()
    {
        return parent::getPrice() * 1.3;
    }

    public function __toString()
    {
        if ($this->getType() === "GOLD") {
            return "OK" . PHP_EOL . $this->changePrice();
        } else {
            return "OK" . PHP_EOL . parent::getPrice();
        }
    }
}