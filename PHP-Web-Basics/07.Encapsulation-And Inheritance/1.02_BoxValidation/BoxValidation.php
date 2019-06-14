<?php

class BoxValidation
{
    /**
     * @var float
     */
    private $length;

    /**
     * @var float
     */
    private $width;

    /**
     * @var float
     */
    private $height;

    /**
     * BoxValidation constructor.
     * @param float $length
     * @param float $width
     * @param float $height
     * @throws Exception
     */
    public function __construct(float $length, float $width, float $height)
    {
        $this->setLength($length);
        $this->setWidth($width);
        $this->setHeight($height);
    }

    /**
     * @return float
     */
    public function getLength(): float
    {
        return $this->length;
    }

    /**
     * @param float $length
     * @throws Exception
     */
    public function setLength(float $length): void
    {
        $this->validateInput($length, "Length");
        $this->length = $length;
    }

    /**
     * @return float
     */
    public function getWidth(): float
    {
        return $this->width;
    }

    /**
     * @param float $width
     * @throws Exception
     */
    public function setWidth(float $width): void
    {
        $this->validateInput($width, "Width");
        $this->width = $width;
    }

    /**
     * @return float
     */
    public function getHeight(): float
    {
        return $this->height;
    }

    /**
     * @param float $height
     * @throws Exception
     */
    public function setHeight(float $height): void
    {
        $this->validateInput($height, "Height");
        $this->height = $height;
    }

    /**
     * @param float $value
     * @param string $parameter
     * @throws Exception
     */
    private function validateInput(float $value, string $parameter): void
    {
        if ($value <= 0) {
            throw new Exception("$parameter cannot be zero or negative.");
        }
    }

    /**
     * @return float
     */
    private function calculateVolume(): float
    {
        return $this->getLength() * $this->getWidth() * $this->getHeight();
    }

    /**
     * @return float
     */
    private function calculateLateralSurfaceArea(): float
    {
        return 2 * ($this->getLength() * $this->getHeight()) + 2 * ($this->getWidth() * $this->getHeight());
    }

    /**
     * @return float
     */
    private function calculateSurfaceArea(): float
    {
        return 2 * ($this->getLength() * $this->getWidth()) +
            2 * ($this->getLength() * $this->getHeight()) +
            2 * ($this->getWidth() * $this->getHeight());
    }

    public function __toString()
    {
        $volume = number_format($this->calculateVolume(), 2, ".", "");
        $lateralSurfaceArea = number_format($this->calculateLateralSurfaceArea(), 2, ".", "");
        $surfaceArea = number_format($this->calculateSurfaceArea(), 2, ".", "");

        return "Surface Area - $surfaceArea\nLateral Surface Area - $lateralSurfaceArea\nVolume - $volume\n";
    }
}