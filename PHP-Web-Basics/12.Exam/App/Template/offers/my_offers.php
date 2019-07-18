<?php /** @var \App\Data\OfferDTO[] $data */ ?>

<h1>MY OFFERS</h1>

<a href="add_offer.php">Add new offer</a> |
<a href="profile.php">My Profile</a> |
<a href="logout.php">logout</a>

<br/><br/>

<table border="1">
    <thead>
    <tr>
        <th>Town</th>
        <th>Type</th>
        <th>Days</th>
        <th>Price</th>
        <th>edit</th>
        <th>Delete</th>
    </tr>
    </thead>

    <tbody>
    <?php foreach ($data as $offerDTO): ?>
        <tr>
            <td><?= $offerDTO->getTown()->getName(); ?></td>
            <td><?= $offerDTO->getRoom()->getType(); ?></td>
            <td><?= $offerDTO->getDays(); ?></td>
            <td><?= $offerDTO->getPrice(); ?></td>
            <td><a href="edit_offer.php?id=<?= $offerDTO->getId(); ?>">edit offer</a></td>
            <td><a href="delete_offer.php?id=<?= $offerDTO->getId(); ?>">delete book</a></td>
        </tr>
    <?php endforeach; ?>
    </tbody>

</table>
