<?php


namespace App\Repository\Rooms;


use App\Data\RoomsDTO;
use App\Repository\DatabaseAbstract;

class RoomRepository extends DatabaseAbstract implements RoomRepositoryInterface
{
    /**
     * @return \Generator | RoomsDTO
     */
    public function findAll(): \Generator
    {
        return $this->db->query(
            "
                SELECT id, type 
                FROM rooms
            ")->execute()
            ->fetch(RoomsDTO::class);


    }

    public function findOneById(int $id): RoomsDTO
    {
        return $this->db->query(
            "
                SELECT 
                    id,
                    type
                FROM rooms
                WHERE id = ?
            ")->execute([$id])
            ->fetch(RoomsDTO::class)
            ->current();
    }
}