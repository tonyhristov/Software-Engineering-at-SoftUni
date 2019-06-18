<?php

interface Car
{
    public function setDriver(string $driver): void;

    public function setModel(string $model): void;

    public function setBrakes(string $brakes): void;

    public function setThrottle(string $floorIt): void;
}
