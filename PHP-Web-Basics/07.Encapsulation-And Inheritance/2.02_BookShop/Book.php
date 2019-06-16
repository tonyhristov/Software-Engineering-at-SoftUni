<?php

class Book
{
    /**
     * @var string
     */
    protected $author;

    /**
     * @var string
     */
    protected $title;

    /**
     * @var int
     */
    protected $price;

    /**
     * @var string
     */
    protected $type;


    /**
     * Book constructor.
     * @param string $author
     * @param string $title
     * @param int $price
     * @param string $type
     * @throws Exception
     */
    public function __construct(string $author, string $title, int $price, string $type)
    {
        $this->setAuthor($author);
        $this->setTitle($title);
        $this->setPrice($price);
        $this->setType($type);
    }

    /**
     * @return string
     */
    public function getAuthor(): string
    {
        return $this->author;
    }

    /**
     * @param string $author
     * @throws Exception
     */
    public function setAuthor(string $author): void
    {
        if (preg_split("/[A-Za-z]+ [A-Za-z]+/", $author, -1, PREG_SPLIT_NO_EMPTY)) {
            throw new Exception("Author not valid!");
        }
        $this->author = $author;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @throws Exception
     */
    public function setTitle(string $title): void
    {
        if (strlen($title) < 3) {
            throw new Exception("Title not valid!");
        }
        $this->title = $title;
    }

    /**
     * @return int
     */
    public function getPrice(): int
    {
        return $this->price;
    }

    /**
     * @param int $price
     * @throws Exception
     */
    public function setPrice(int $price): void
    {
        if ($price <= 0) {
            throw new Exception("Price not valid!");
        }
        $this->price = $price;
    }

    /**
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     * @throws Exception
     */
    public function setType(string $type): void
    {
        if ($type !== "GOLD" && $type !== "STANDARD") {
            throw new Exception("Type is not valid!");
        }
        $this->type = $type;
    }

}