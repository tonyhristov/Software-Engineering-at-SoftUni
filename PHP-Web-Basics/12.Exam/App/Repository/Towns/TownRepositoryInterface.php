<?php


namespace App\Repository\Towns;


use App\Data\TownDTO;

interface TownRepositoryInterface
{
    /**
     * @return \Generator | TownDTO[]
     */
    public function findAll(): \Generator;

    public function findOneById(int $id): TownDTO;
}