<?php


namespace App\Data;


class OfferDTO
{
    /**
     * @var int
     */
    private $id;

    /**
     * @var float
     */
    private $price;

    /**
     * @var int
     */
    private $days;

    /**
     * @var string
     */
    private $description;

    /**
     * @var string
     */
    private $pictureURL;

    /**
     * @var RoomsDTO
     */
    private $room;

    /**
     * @var TownDTO
     */
    private $town;

    /**
     * @var UserDTO
     */
    private $user;


    /**
     * @var string
     */
    private $addedOn;

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

    /**
     * @param float $price
     */
    public function setPrice(float $price): void
    {
        $this->price = $price;
    }

    /**
     * @return int
     */
    public function getDays(): int
    {
        return $this->days;
    }

    /**
     * @param int $days
     */
    public function setDays(int $days): void
    {
        $this->days = $days;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return string
     */
    public function getPictureURL():string
    {
        return $this->pictureURL;
    }

    /**
     * @param string $pictureURL
     */
    public function setPictureURL(string $pictureURL): void
    {
        $this->pictureURL = $pictureURL;
    }

    /**
     * @return RoomsDTO
     */
    public function getRoom()
    {
        return $this->room;
    }

    /**
     * @param RoomsDTO $room
     * @return OfferDTO
     */
    public function setRoom($room): OfferDTO
    {
        $this->room = $room;
        return $this;
    }


    /**
     * @return TownDTO
     */
    public function getTown()
    {
        return $this->town;
    }

    /**
     * @param TownDTO $town
     * @return OfferDTO
     */
    public function setTown($town): OfferDTO
    {
        $this->town = $town;
        return $this;
    }

    /**
     * @return UserDTO
     */
    public function getUser(): UserDTO
    {
        return $this->user;
    }

    /**
     * @param UserDTO $user
     */
    public function setUser(UserDTO $user): void
    {
        $this->user = $user;
    }



    /**
     * @return string
     */
    public function getAddedOn(): string
    {
        return $this->addedOn;
    }

    /**
     * @param string $addedOn
     */
    public function setAddedOn(string $addedOn): void
    {
        $this->addedOn = $addedOn;
    }


}