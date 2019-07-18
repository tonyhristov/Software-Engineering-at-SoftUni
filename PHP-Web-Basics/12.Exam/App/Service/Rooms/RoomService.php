<?php


namespace App\Service\Rooms;


use App\Data\RoomsDTO;
use App\Repository\Rooms\RoomRepositoryInterface;

class RoomService implements RoomServiceInterface
{
    /**
     * @var RoomRepositoryInterface
     */
    private $roomRepository;

    /**
     * RoomService constructor.
     * @param RoomRepositoryInterface $roomRepository
     */
    public function __construct(RoomRepositoryInterface $roomRepository)
    {
        $this->roomRepository = $roomRepository;
    }


    /**
     * @return \Generator|RoomsDTO[]
     */
    public function getAll(): \Generator
    {
        return $this->roomRepository->findAll();
    }

    public function getOneById(int $id): RoomsDTO
    {
        return $this->roomRepository->findOneById($id);
    }
}