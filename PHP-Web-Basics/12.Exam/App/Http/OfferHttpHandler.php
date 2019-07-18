<?php


namespace App\Http;


use App\Data\EditOfferDTO;
use App\Data\InsertDTO;
use App\Data\OfferDTO;
use App\Service\Offers\OfferServiceInterface;
use App\Service\Rooms\RoomServiceInterface;
use App\Service\Towns\TownServiceInterface;
use App\Service\UserServiceInterface;
use Core\DataBinderInterface;
use Core\TemplateInterface;

class OfferHttpHandler extends UserHttpHandlerAbstract
{
    /**
     * @var OfferServiceInterface
     */
    private $offerService;

    /**
     * @var UserServiceInterface
     */
    private $userService;

    /**
     * @var RoomServiceInterface
     */
    private $roomService;

    /**
     * @var TownServiceInterface
     */
    private $townService;

    /**
     * OfferHttpHandler constructor.
     * @param TemplateInterface $template
     * @param DataBinderInterface $dataBinder
     * @param OfferServiceInterface $offerService
     * @param UserServiceInterface $userService
     * @param RoomServiceInterface $roomService
     * @param TownServiceInterface $townService
     */
    public function __construct(
        TemplateInterface $template,
        DataBinderInterface $dataBinder,
        OfferServiceInterface $offerService,
        UserServiceInterface $userService,
        RoomServiceInterface $roomService,
        TownServiceInterface $townService)
    {
        parent::__construct($template, $dataBinder);
        $this->offerService = $offerService;
        $this->userService = $userService;
        $this->roomService = $roomService;
        $this->townService = $townService;
    }

    public function add(array $formData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        if (isset($formData['add'])) {
            $this->handleInsertProcess($formData);
        } else {
            $insertDto = new InsertDTO();
            $insertDto->setTown($this->townService->getAll());
            $insertDto->setRoom($this->roomService->getAll());
            $this->render("offers/add_offer", $insertDto);
        }
    }

    private function handleInsertProcess($formData)
    {
        $offer = new OfferDTO();
        try {
            $offer = $this->dataBinder->bind($formData, OfferDTO::class);
            $this->offerService->add($offer);
            $this->redirect("my_offers.php");
        } catch (\Exception $ex) {
            $this->render('offers/add_offer', $offer, [$ex->getMessage()]);
        }
    }

    public function delete($getData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        $currentUser = $this->userService->currentUser();
        $currentOffer = $this->offerService->getOneById($getData['id']);

        if ($currentUser->getId() === $currentOffer->getUser()->getId()) {
            $this->offerService->delete($getData['id']);
            $this->redirect("my_offers.php");
        } else {
            $myOffers = $this->offerService->getAllByAuthor();
            $this->render('offers/all_offers', $myOffers, ['Cannot delete this offer!']);
        }
    }

    public function allOffersByAuthor()
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        try {
            $offers = $this->offerService->getAllByAuthor();
            $this->render("offers/my_offers", $offers);
        } catch (\Exception $ex) {
            $offers = $this->offerService->getAllByAuthor();
            $this->render("offers/my_offers", $offers,
                [$ex->getMessage()]);
        }
    }

    public function edit($formData = [], $getData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        if (isset($formData["edit"])) {
            $this->handleEditProcess($formData, $getData);
        } else {
            $offer = $this->offerService->getOneById($getData["id"]);
            $town = $this->townService->getAll();
            $room = $this->roomService->getAll();

            $editOfferDTO = new EditOfferDTO();
            $editOfferDTO->setOffer($offer);
            $editOfferDTO->setTown($town);
            $editOfferDTO->setRoom($room);

            $this->render("offers/edit_offer", $editOfferDTO);
        }

    }

    private function handleEditProcess($formData, $getData)
    {
        try {
            $town = $this->townService->getOneById($formData['town']);
            $room = $this->roomService->getOneById($formData['room']);
            $user = $this->userService->currentUser();

            /**
             * @var OfferDTO $offer
             */
            $offer = $this->dataBinder->bind($formData, OfferDTO::class);
            $offer->setTown($town);
            $offer->setRoom($room);
            $offer->setUser($user);
            $offer->setId($getData["id"]);

            $this->offerService->edit($offer);
            $this->redirect("my_offers.php");
        } catch (\Exception $ex) {
            $offer = $this->offerService->getOneById($getData["id"]);

            $editOfferDto = new EditOfferDTO();
            $editOfferDto->setOffer($offer);
            $editOfferDto->setTown($this->townService->getAll());
            $editOfferDto->setRoom($this->roomService->getAll());

            $this->render("offers/edit_offer", $editOfferDto, [$ex->getMessage()]);
        }
    }

    public function allOffers()
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        try {
            $offers = $this->offerService->getAll();
            $this->render("offers/all_offers", $offers);
        } catch (\Exception $ex) {
            $offers = $this->offerService->getAll();
            $this->render("offers/all_offers", $offers, [$ex->getMessage()]);
        }
    }

    public function view($getData = [])
    {
        if ($this->userService->isLogged()) {
            $this->redirect("login.php");
            exit;
        }

        $offer = $this->offerService->getOneById($getData["id"]);
        $this->render("offers/view_offer", $offer);
    }

}