<?php


namespace App\Data;


class EditOfferDTO
{
    /**
     * @var OfferDTO
     */
    private $offer;

    /**
     * @var TownDTO[]
     */
    private $town;

    /**
     * @var RoomsDTO[]
     */
    private $room;

    /**
     * @return OfferDTO
     */
    public function getOffer(): OfferDTO
    {
        return $this->offer;
    }

    /**
     * @param OfferDTO $offer
     */
    public function setOffer(OfferDTO $offer): void
    {
        $this->offer = $offer;
    }

    /**
     * @return TownDTO[]
     */
    public function getTown()
    {
        return $this->town;
    }

    /**
     * @param TownDTO[] $town
     */
    public function setTown($town): void
    {
        $this->town = $town;
    }

    /**
     * @return RoomsDTO[]
     */
    public function getRoom()
    {
        return $this->room;
    }

    /**
     * @param RoomsDTO[] $room
     */
    public function setRoom($room): void
    {
        $this->room = $room;
    }


}