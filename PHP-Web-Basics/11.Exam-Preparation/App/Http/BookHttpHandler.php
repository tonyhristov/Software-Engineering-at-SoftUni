<?php

namespace App\Http;

use App\Data\BookDTO;
use App\Data\EditBookDTO;
use App\Http\UserHttpHandlerAbstract;
use App\Service\Books\BooksServiceInterface;
use App\Service\Genres\GenreServiceInterface;
use App\Service\UserServiceInterface;
use Core\DataBinderInterface;
use Core\TemplateInterface;

class BookHttpHandler extends UserHttpHandlerAbstract
{
    /**
     * @var BooksServiceInterface
     */
    private $bookService;

    /**
     * @var UserServiceInterface
     */
    private $userService;

    /**
     * @var GenreServiceInterface
     */
    private $genreService;

    /**
     * BookHttpHandler constructor.
     * @param TemplateInterface $template
     * @param DataBinderInterface $dataBinder
     * @param BooksServiceInterface $bookService
     * @param UserServiceInterface $userService
     * @param GenreServiceInterface $genreService
     */
    public function __construct(
        TemplateInterface $template,
        DataBinderInterface $dataBinder,
        BooksServiceInterface $bookService,
        UserServiceInterface $userService,
        GenreServiceInterface $genreService)
    {
        parent::__construct($template, $dataBinder);
        $this->bookService = $bookService;
        $this->userService = $userService;
        $this->genreService = $genreService;
    }

    public function add(array $formData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        if (isset($formData["add"])) {
            $this->handleInsertProcess($formData);
        } else {
            $genres = $this->genreService->getAll();
            $this->render("books/add", $genres);
        }
    }

    private function handleInsertProcess(array $formData)
    {
        try {
            $currentUser = $this->userService->currentUser();
            $genre = $this->genreService->getOneById($formData["genre_id"]);
            /**
             * @var BookDTO $book
             */
            $book = $this->dataBinder->bind($formData, BookDTO::class);
            $book->setGenre($genre);
            $book->setUser($currentUser);

            $this->bookService->add($book);
            $this->redirect("myBooks.php");
        } catch (\Exception $ex) {

        }
    }

    public function allBooksByAuthor()
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }
        try {
            $books = $this->bookService->getAllByAuthor();
            $this->render("books/myBooks", $books);
        } catch (\Exception $ex) {
            $books = $this->bookService->getAllByAuthor();
            $this->render("books/myBooks", $books,
                [$ex->getMessage()]);
        }
    }

    public function allBooks()
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }
        try {
            $books = $this->bookService->getAll();
            $this->render("books/allBooks", $books);
        } catch (\Exception $ex) {
            $books = $this->bookService->getAll();
            $this->render("books/allBooks", $books,
                [$ex->getMessage()]);
        }
    }

    public function view($getData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        $book = $this->bookService->getOneById($getData["id"]);
        $this->render("books/viewBook", $book);
    }

    public function delete($getData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        $this->bookService->delete($getData["id"]);
        $this->redirect("myBooks.php");
    }

    public function edit($formData = [], $getData = [])
    {
        if (isset($formData["edit"])) {

        } else {
            $book = $this->bookService->getOneById($getData["id"]);
            $genres = $this->genreService->getAll();

            $editBookDTO = new EditBookDTO();
            $editBookDTO->setBook($book);
            $editBookDTO->setGenres($genres);



            $this->render("books/editBook", $editBookDTO);
        }
    }
}