<?php


namespace App\Service\Rooms;


use App\Data\RoomsDTO;

interface RoomServiceInterface
{
    /**
     * @return \Generator|RoomsDTO[]
     */
    public function getAll(): \Generator;

    public function getOneById(int $id): RoomsDTO;

}