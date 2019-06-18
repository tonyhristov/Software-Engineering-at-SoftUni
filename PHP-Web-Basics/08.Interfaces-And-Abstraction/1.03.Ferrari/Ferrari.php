<?php

class Ferrari implements Car
{

    /**
     * @var string
     */
    private $driver;

    /**
     * @var string
     */
    private $model;

    /**
     * @var string
     */
    private $brakes;

    /**
     * @var string
     */
    private $throttle;

    /**
     * Ferrari constructor.
     * @param string $driver
     * @param string $model
     * @param string $brakes
     * @param string $throttle
     */
    public function __construct(string $driver, string $model, string $brakes, string $throttle)
    {
        $this->setDriver($driver);
        $this->setModel($model);
        $this->setBrakes($brakes);
        $this->setThrottle($throttle);
    }

    /**
     * @param string $driver
     */
    public function setDriver(string $driver): void
    {
        $this->driver = $driver;
    }

    /**
     * @param string $model
     */
    public function setModel(string $model): void
    {
        $this->model = $model;
    }

    /**
     * @param string $brakes
     */
    public function setBrakes(string $brakes): void
    {
        $this->brakes = $brakes;
    }

    /**
     * @param string $floorIt
     */
    public function setThrottle(string $floorIt): void
    {
        $this->throttle = $floorIt;
    }

    /**
     * @return string
     */
    public function getDriver(): string
    {
        return $this->driver;
    }

    /**
     * @return string
     */
    public function getModel(): string
    {
        return $this->model;
    }

    /**
     * @return string
     */
    public function getBrakes(): string
    {
        return $this->brakes;
    }

    /**
     * @return string
     */
    public function getThrottle(): string
    {
        return $this->throttle;
    }

    public function __toString()
    {
        return $this->getModel() . "/" . $this->getBrakes() . "/" . $this->getThrottle() . "/" . $this->getDriver();
    }
}
