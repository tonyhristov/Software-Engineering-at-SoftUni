<?php


namespace App\Repository\Offers;


use App\Data\OfferDTO;

interface OfferRepositoryInterface
{
    public function insert(OfferDTO $offerDTO): bool;

    public function update(OfferDTO $offerDTO, int $id): bool;

    public function remove(int $id): bool;

    /**
     * @return \Generator | OfferDTO[]
     */
    public function findAll(): \Generator;

    public function findOneById(int $id): OfferDTO;

    /**
     * @param int $id
     * @return \Generator | OfferDTO[]
     */
    public function findAllByAuthorId(int $id): \Generator;
}