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
            $genre = $this->genreService->getOneById($formData['genre_id']);

            /** @var BookDTO $book */
            $book = $this->dataBinder->bind($formData, BookDTO::class);
            $book->setGenre($genre);
            $book->setUser($currentUser);

            $this->bookService->add($book);
            $this->redirect("myBooks.php");
        } catch (\Exception $ex) {
            $genres = $this->genreService->getAll();
            $this->render('books/add', $genres, [$ex->getMessage()]);
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
        }catch (\Exception $ex){
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
        }catch (\Exception $ex){
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

        $book = $this->bookService->getOneById($getData['id']);
        $this->render("books/viewBook", $book);
    }

    public function delete($getData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        $currentUser = $this->userService->currentUser();
        $currentBook = $this->bookService->getOneById($getData['id']);

        if ($currentUser->getId() === $currentBook->getUser()->getId()) {
            $this->bookService->delete($getData['id']);
            $this->redirect("myBooks.php");
        } else {
            $myBooks = $this->bookService->getAllByAuthor();
            $this->render('books/allBooks', $myBooks, ['Cannot delete this book!']);
        }
    }

    public function edit($formData = [], $getData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        if (isset($formData['edit'])) {
            $this->handleEditProcess($formData, $getData);
        } else {
            $book = $this->bookService->getOneById($getData['id']);
            $genres = $this->genreService->getAll();

            $editBookDTO = new EditBookDTO();
            $editBookDTO->setBook($book);
            $editBookDTO->setGenres($genres);

            $this->render("books/editBook", $editBookDTO);
        }
    }

    private function handleEditProcess($formData, $getData)
    {
        try {
            $genre = $this->genreService->getOneById($formData['genre_id']);
            $user = $this->userService->currentUser();
            /** @var BookDTO $book */
            $book = $this->dataBinder->bind($formData, BookDTO::class);
            $book->setGenre($genre);
            $book->setUser($user);
            $book->setId($getData['id']);
            $this->bookService->edit($book);
            $this->redirect("myBooks.php");
        } catch (\Exception $ex) {
            $book = $this->bookService->getOneById($getData['id']);
            $editBookDto = new EditBookDTO();
            $editBookDto->setBook($book);
            $editBookDto->setGenres($this->genreService->getAll());
            $this->render('books/editBook', $editBookDto, [$ex->getMessage()]);
        }
    }
}
