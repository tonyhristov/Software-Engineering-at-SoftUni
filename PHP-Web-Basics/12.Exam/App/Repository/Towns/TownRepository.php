<?php


namespace App\Repository\Towns;


use App\Data\TownDTO;
use App\Repository\DatabaseAbstract;

class TownRepository extends DatabaseAbstract implements TownRepositoryInterface
{

    /**
     * @return \Generator | TownDTO[]
     */
    public function findAll(): \Generator
    {
        return $this->db->query(
            "
                SELECT id, name
                FROM towns
            ")->execute()
            ->fetch(TownDTO::class);
    }

    public function findOneById(int $id): TownDTO
    {
        return $this->db->query(
            "
                SELECT id, name
                FROM towns
                WHERE id = ?
        ")->execute([$id])
            ->fetch(TownDTO::class)
            ->current();
    }
}