<?php


class Citizen implements Identity
{

    /**
     * @var string
     */
    private $name;

    /**
     * @var integer
     */
    private $age;

    /**
     * @var string
     */
    private $id;

    /**
     * Citizen constructor.
     * @param string $name
     * @param int $age
     * @param string $id
     */
    public function __construct(string $name, int $age, string $id)
    {
        $this->setName($name);
        $this->setAge($age);
        $this->setId($id);
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @param int $age
     */
    public function setAge(int $age): void
    {
        $this->age = $age;
    }

    /**
     * @param string $id
     */
    public function setId(string $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return int
     */
    public function getAge(): int
    {
        return $this->age;
    }

    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @param string $id
     * @return string
     */
    public function getFakeId(string $id): string
    {
        $length = strlen($id);
        if (substr($this->getId(), -$length, $length) == $id) {
            return $this->getId() . PHP_EOL;
        } else {
            return "";
        }
    }

}
