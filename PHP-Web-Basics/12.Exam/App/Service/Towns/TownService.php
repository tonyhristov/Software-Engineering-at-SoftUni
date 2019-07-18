<?php


namespace App\Service\Towns;


use App\Data\TownDTO;
use App\Repository\Towns\TownRepositoryInterface;

class TownService implements TownServiceInterface
{
    /**
     * @var TownRepositoryInterface
     */
    private $townRepository;

    /**
     * TownService constructor.
     * @param TownRepositoryInterface $townRepository
     */
    public function __construct(TownRepositoryInterface $townRepository)
    {
        $this->townRepository = $townRepository;
    }


    /**
     * @return \Generator|TownDTO[]
     */
    public function getAll(): \Generator
    {
        return $this->townRepository->findAll();
    }

    public function getOneById(int $id): TownDTO
    {
        return $this->townRepository->findOneById($id);
    }
}