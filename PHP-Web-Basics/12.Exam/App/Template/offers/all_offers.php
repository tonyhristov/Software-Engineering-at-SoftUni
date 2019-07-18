<?php /** @var \App\Data\OfferDTO[] $data */ ?>

<h1>MY OFFERS</h1>

<a href="add_offer.php">Add new offer</a> |
<a href="profile.php">My Profile</a> |
<a href="logout.php">logout</a>

<br/><br/>

<table border="1">
    <thead>
    <tr>
        <th>Picture</th>
        <th>Town</th>
        <th>Type</th>
        <th>Days</th>
        <th>Total Price</th>
        <th>Details</th>
    </tr>
    </thead>

    <tbody>
    <?php foreach ($data as $offerDTO): ?>
        <tr>
            <td><img src="<?= $offerDTO->getPictureURL() ?>" alt="None" width="250" height="100"/></td>
            <td><?= $offerDTO->getTown()->getName(); ?></td>
            <td><?= $offerDTO->getRoom()->getType(); ?></td>
            <td><?= $offerDTO->getDays(); ?></td>
            <td><?= $offerDTO->getPrice() * $offerDTO->getDays(); ?></td>
            <td><a href="view_offer.php?id=<?= $offerDTO->getId(); ?>">Details</a></td>
        </tr>
    <?php endforeach; ?>
    </tbody>

</table>
