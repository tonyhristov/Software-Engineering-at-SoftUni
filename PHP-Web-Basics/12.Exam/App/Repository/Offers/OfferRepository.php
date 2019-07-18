<?php


namespace App\Repository\Offers;


use App\Data\OfferDTO;
use App\Data\RoomsDTO;
use App\Data\TownDTO;
use App\Data\UserDTO;
use App\Repository\DatabaseAbstract;

class OfferRepository extends DatabaseAbstract implements OfferRepositoryInterface
{

    public function insert(OfferDTO $offerDTO): bool
    {

        $this->db->query(
            "
        INSERT INTO offers (
                price,
                days,
                description,
                picture_url,
                room_id,
                town_id,
                user_id)
                 VALUES (?,?,?,?,?,?,?)
        ")->execute([
            $offerDTO->getPrice(),
            $offerDTO->getDays(),
            $offerDTO->getDescription(),
            $offerDTO->getPictureURL(),
            intval($offerDTO->getRoom()),
            intval($offerDTO->getTown()),
            intval($_SESSION['id']),
        ]);
        return true;
    }

    public function update(OfferDTO $offerDTO, int $id): bool
    {
        $this->db->query(
            "
                 UPDATE offers
                 SET
                    price = ?,
                    days = ?,
                    description = ?,
                    picture_url = ?,
                    room_id = ?,
                    town_id = ?,
                    user_id = ?
                 WHERE id = ?
            ")->execute([
            $offerDTO->getPrice(),
            $offerDTO->getDays(),
            $offerDTO->getDescription(),
            strval($offerDTO->getPictureURL()),
            intval($offerDTO->getRoom()->getId()),
            intval($offerDTO->getTown()->getId()),
            intval($_SESSION['id']),
            intval($id)
        ]);

        return true;
    }

    public function remove(int $id): bool
    {
        $this->db->query("DELETE FROM offers WHERE id = ?")->execute([$id]);
        return true;
    }

    /**
     * @return \Generator | OfferDTO[]
     */
    public function findAll(): \Generator
    {
        $lazyOfferResult = $this->db->query(
            "
            SELECT
                o.id AS offerId,
                   o.price,
                   o.days,
                   o.description,
                   o.picture_url AS pictureURL,
                   o.room_id, 
                   o.town_id,
                   o.user_id,
                   o.is_occupied AS isOccupied,
                   o.added_on,
                   r.id AS roomId,
                   r.type,
                   u.id AS userId,
                   u.email,
                   u.password,
                   u.name,
                   u.phone,
                   u.money_spent AS moneySpent,
                   t.id AS townId,
                   t.name
                FROM offers AS o 
                INNER JOIN rooms AS r on o.room_id = r.id
                INNER JOIN users AS u on o.user_id = u.id
                INNER JOIN towns AS t on o.town_id = t.id
                ORDER BY o.added_on DESC 
            ")->execute()
            ->fetchAssoc();



        foreach ($lazyOfferResult as $row) {
            /**
             * @var OfferDTO $offer
             * @var UserDTO $user
             * @var RoomsDTO $room
             * @var TownDTO $town
             */

            $offer = $this->dataBinder->bind($row, OfferDTO::class);
            $room = $this->dataBinder->bind($row, RoomsDTO::class);
            $town = $this->dataBinder->bind($row, TownDTO::class);
            $user = $this->dataBinder->bind($row, UserDTO::class);

            $offer->setId($row["offerId"]);
            $town->setId($row["townId"]);
            $room->setId($row["roomId"]);
            $user->setId($row["userId"]);

            $offer->setRoom($room);
            $offer->setTown($town);
            $offer->setUser($user);

            yield $offer;
        }
    }

    public function findOneById(int $id): OfferDTO
    {
        $row = $this->db->query(
            "
            SELECT
                 o.id AS offerId,
                   o.price,
                   o.days,
                   o.description,
                   o.picture_url AS pictureURL,
                   o.room_id, 
                   o.town_id,
                   o.user_id,
                   o.is_occupied AS isOccupied,
                   o.added_on,
                   r.id AS roomId,
                   r.type,
                   u.id AS userId,
                   u.email,
                   u.password,
                   u.name,
                   u.phone,
                   u.money_spent AS moneySpent,
                   t.id AS townId,
                   t.name
                FROM offers AS o 
                INNER JOIN rooms AS r on o.room_id = r.id
                INNER JOIN users AS u on o.user_id = u.id
                INNER JOIN towns AS t on o.town_id = t.id
                WHERE o.id = ?
                ORDER BY o.added_on DESC 
            ")->execute([$id])
            ->fetchAssoc()
            ->current();

        /**
         * @var OfferDTO $offer
         * @var UserDTO $user
         * @var RoomsDTO $room
         * @var TownDTO $town
         */
        $offer = $this->dataBinder->bind($row, OfferDTO::class);
        $room = $this->dataBinder->bind($row, RoomsDTO::class);
        $town = $this->dataBinder->bind($row, TownDTO::class);
        $user = $this->dataBinder->bind($row, UserDTO::class);

        $offer->setId($row["offerId"]);
        $town->setId($row["townId"]);
        $room->setId($row["roomId"]);
        $user->setId($row["userId"]);

        $offer->setRoom($room);
        $offer->setTown($town);
        $offer->setUser($user);

        return $offer;
    }

    /**
     * @param int $id
     * @return \Generator | OfferDTO[]
     */
    public function findAllByAuthorId(int $id): \Generator
    {
        $lazyOfferResult = $this->db->query(
            "
            SELECT
                   o.id AS offerId,
                   o.price,
                   o.days,
                   o.description,
                   o.picture_url AS pictrureURL,
                   o.room_id, 
                   o.town_id,
                   o.user_id,
                   o.is_occupied AS isOccupied,
                   o.added_on,
                   r.id AS roomId,
                   r.type,
                   u.id AS userId,
                   u.email,
                   u.password,
                   u.name,
                   u.phone,
                   u.money_spent AS moneySpent,
                   t.id AS townId,
                   t.name
                FROM offers AS o 
                INNER JOIN rooms AS r on o.room_id = r.id
                INNER JOIN towns AS t on o.town_id = t.id
                INNER JOIN users AS u on o.user_id = u.id
                WHERE o.user_id = ?
                ORDER BY o.added_on DESC 
            ")->execute([$id])
            ->fetchAssoc();

        foreach ($lazyOfferResult as $row) {
            /**
             * @var OfferDTO $offer
             * @var UserDTO $user
             * @var TownDTO $town
             * @var RoomsDTO $room
             */

            $offer = $this->dataBinder->bind($row, OfferDTO::class);
            $town = $this->dataBinder->bind($row, TownDTO::class);
            $room = $this->dataBinder->bind($row, RoomsDTO::class);
            $user = $this->dataBinder->bind($row, UserDTO::class);

            $offer->setId($row["offerId"]);
            $town->setId($row["townId"]);
            $room->setId($row["roomId"]);
            $user->setId($row["userId"]);

            $offer->setTown($town);
            $offer->setRoom($room);
            $offer->setUser($user);

            yield $offer;
        }
    }
}