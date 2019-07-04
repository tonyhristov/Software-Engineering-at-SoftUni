<?php
/**
 * @var \App\Data\BookDTO $data
 */
?>

<h1>VIEW BOOK</h1>

<a href="profile.php">My Profile</a><br>

<p>Book Title: <?= $data->getTitle(); ?></p>
<p>Book Author: <?= $data->getAuthor(); ?></p>
<p>Description: <?= $data->getDescription(); ?></p>
<p>Genre: <?= $data->getGenre()->getName(); ?></p>

<img src="<?= $data->getImageUrl(); ?>" alt="None" width="400" height="250">