<?php

Class Articles
{
    private $title;
    private $content;
    private $author;

    /**
     * Articles constructor.
     * @param $title
     * @param $content
     * @param $author
     */
    public function __construct($title, $content, $author)
    {
        $this->title = $title;
        $this->content = $content;
        $this->author = $author;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title): void
    {
        $this->title = $title;
    }

    /**
     * @param mixed $content
     */
    public function setContent($content): void
    {
        $this->content = $content;
    }

    /**
     * @param mixed $author
     */
    public function setAuthor($author): void
    {
        $this->author = $author;
    }

    public function __toString()
    {
        return $this->title . " - " . $this->content . ": " . $this->author;
    }
}

$article = explode(", ", readline());
$title = $article[0];
$content = $article[1];
$author = $article[2];
$myArticleObject = new Articles($title, $content, $author);

$endOfFor = readline();
for ($i = 0; $i < $endOfFor; $i++) {
    $command = explode(": ", readline());
    $main = $command[0];
    $side = $command[1];

    switch ($main) {
        case "Edit":
            $myArticleObject->setContent($side);
            break;
        case "ChangeAuthor":
            $myArticleObject->setAuthor($side);
            break;
        case "Rename":
            $myArticleObject->setTitle($side);
            break;
    }
}
echo $myArticleObject;