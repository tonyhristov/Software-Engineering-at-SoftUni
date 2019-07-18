<?php
/**
 * @var \App\Data\OfferDTO $data
 */
?>



<h1>Offer № <?= $data->getId(); ?></h1>

<a href="profile.php">My Profile</a> |
<a href="all_offers.php">Back to All Offers</a><br>

<p>Town: <?= $data->getTown()->getName(); ?></p>
<p>Room: <?= $data->getRoom()->getType(); ?></p>
<p>Description: <?= $data->getDescription(); ?></p>
<p>Days: <?= $data->getDays(); ?></p>
<p>Price: <?= $data->getPrice(); ?></p>
<p>Total Price: <?= $data->getPrice() * $data->getDays(); ?></p>

<img src="<?= $data->getPictureURL(); ?>" alt="None" width="400" height="250">

<p>___________________________________________________</p>

<p>Offer Email: <?= $data->getUser()->getEmail(); ?></p>
<p>Offer Phone: <?= $data->getUser()->getPhone(); ?></p>