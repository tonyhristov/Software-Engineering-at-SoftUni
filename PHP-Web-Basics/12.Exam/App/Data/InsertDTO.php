<?php


namespace App\Data;


class InsertDTO
{
    /**
     * @var OfferDTO
     */
    private $offer;

    /**
     * @var RoomsDTO[]
     */
    private $room;

    /**
     * @var TownDTO[]
     */
    private $town;

    /**
     * @return OfferDTO
     */
    public function getOffer()
    {
        return $this->offer;
    }

    /**
     * @param OfferDTO $offer
     */
    public function setOffer( $offer): void
    {
        $this->offer = $offer;
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
    public function setRoom($room)
    {
        $this->room = $room;
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
    public function setTown($town)
    {
        $this->town = $town;
    }

}