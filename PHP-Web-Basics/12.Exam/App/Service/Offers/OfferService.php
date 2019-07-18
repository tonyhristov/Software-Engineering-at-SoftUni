<?php


namespace App\Service\Offers;


use App\Data\OfferDTO;
use App\Repository\Offers\OfferRepositoryInterface;
use App\Service\UserServiceInterface;

class OfferService implements OfferServiceInterface
{
    /**
     * @var OfferRepositoryInterface
     */
    private $offerRepository;

    /**
     * @var UserServiceInterface
     */
    private $userService;

    /**
     * OfferService constructor.
     * @param OfferRepositoryInterface $offerRepository
     * @param UserServiceInterface $userService
     */
    public function __construct(OfferRepositoryInterface $offerRepository, UserServiceInterface $userService)
    {
        $this->offerRepository = $offerRepository;
        $this->userService = $userService;
    }


    public function add(OfferDTO $offerDTO): bool
    {
        return $this->offerRepository->insert($offerDTO);
    }

    public function edit(OfferDTO $offerDTO): bool
    {
        return $this->offerRepository->update($offerDTO, $offerDTO->getId());
    }

    public function delete(int $id): bool
    {
        return $this->offerRepository->remove($id);
    }

    /**
     * @return \Generator | OfferDTO[]
     */
    public function getAll(): \Generator
    {
        return $this->offerRepository->findAll();
    }

    public function getOneById(int $id): OfferDTO
    {
        return $this->offerRepository->findOneById($id);
    }


    public function getAllByAuthor()
    {
        $currentUser = $this->userService->currentUser();

        return $this->offerRepository->findAllByAuthorId($currentUser->getId());
    }
}