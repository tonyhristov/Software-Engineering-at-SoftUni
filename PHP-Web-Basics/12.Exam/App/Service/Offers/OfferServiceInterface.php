<?php


namespace App\Service\Offers;


use App\Data\OfferDTO;

interface OfferServiceInterface
{
    public function add(OfferDTO $offerDTO): bool;

    public function edit(OfferDTO $offerDTO): bool;

    public function delete(int $id): bool;

    /**
     * @return \Generator | OfferDTO[]
     */
    public function getAll(): \Generator;

    public function getOneById(int $id): OfferDTO;

    public function getAllByAuthor();
}