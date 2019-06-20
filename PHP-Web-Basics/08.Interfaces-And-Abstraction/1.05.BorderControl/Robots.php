<?php


class Robots implements Identity
{

    /**
     * @var string
     */
    private $model;

    /**
     * @var string
     */
    private $id;

    /**
     * Robots constructor.
     * @param string $model
     * @param string $id
     */
    public function __construct(string $model, string $id)
    {
        $this->setModel($model);
        $this->setId($id);
    }

    /**
     * @param string $model
     */
    public function setModel(string $model): void
    {
        $this->model = $model;
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
    public function getModel(): string
    {
        return $this->model;
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
            return $this->getId();
        } else {
            return "";
        }
    }

}
