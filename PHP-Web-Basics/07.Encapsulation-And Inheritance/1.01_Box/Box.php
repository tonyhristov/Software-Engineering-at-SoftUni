<?php
class Box
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
     * Box constructor.
     * @param float $length
     * @param float $width
     * @param float $height
     */
    public function __construct($length, $width, $height)
    {
        $this->length = $length;
        $this->width = $width;
        $this->height = $height;
    }

    /**
     * @return float
     */
    public function getLength()
    {
        return $this->length;
    }

    /**
     * @return float
     */
    public function getWidth()
    {
        return $this->width;
    }

    /**
     * @return float
     */
    public function getHeight()
    {
        return $this->height;
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