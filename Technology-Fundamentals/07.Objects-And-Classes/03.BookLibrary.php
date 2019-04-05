<?php

class Book
{
    private $title;
    private $author;
    private $publisher;
    private $releaseDate;
    private $isbn;
    private $price;

    /**
     * Book constructor.
     * @param $title
     * @param $author
     * @param $publisher
     * @param $releaseDate
     * @param $isbn
     * @param $price
     */
    public function __construct($title, $author, $publisher, $releaseDate, $isbn, $price)
    {
        $this->title = $title;
        $this->author = $author;
        $this->publisher = $publisher;
        $this->releaseDate = $releaseDate;
        $this->isbn = $isbn;
        $this->price = $price;
    }

    /**
     * @return mixed
     */
    public function getAuthor()
    {
        return $this->author;
    }

    /**
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
    }
}

$n = readline();

$listOfBooks = [];
$libraryList = [];

for ($i = 0; $i < $n; $i++) {
    $input = explode(" ", readline());
    $title = $input[0];
    $author = $input[1];
    $publisher = $input[2];
    $releaseDate = $input[3];
    $isbn = $input[4];
    $price = $input[5];

    $book = new Book($title, $author, $publisher, $releaseDate, $isbn, $price);
    $listOfBooks[] = $book;
}

foreach ($listOfBooks as $value) {
    $author = $value->getAuthor();
    $price = $value->getPrice();

    if (!key_exists($author, $libraryList)) {
        $libraryList[$author] = 0;
    }
    $libraryList[$author] += $price;
}

uksort($libraryList, function ($a, $b) use ($libraryList) {
    if ($libraryList[$a] < $libraryList[$b]) {
        return 1;
    } elseif ($libraryList[$a] > $libraryList[$b]) {
        return -1;
    } else {
        return strcmp($a, $b);
    }
});

foreach ($libraryList as $key => $value) {
    echo $key . " -> " . number_format($value, 2, ".", "") . PHP_EOL;
}