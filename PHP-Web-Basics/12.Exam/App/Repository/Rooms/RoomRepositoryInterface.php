<?php


namespace App\Repository\Rooms;


use App\Data\RoomsDTO;

interface RoomRepositoryInterface
{
    /**
     * @return \Generator | RoomsDTO
     */
    public function findAll(): \Generator;

    public function findOneById(int $id): RoomsDTO;
}