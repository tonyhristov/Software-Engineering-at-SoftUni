<?php
/**
 * @var \App\Data\UserDTO $data
 */
?>

<h1>Hello, <?= $data->getFullName(); ?></h1>

<a href="addBook.php">Add new book</a> | <a href="myProfile.php">My Profile</a> | <a href="logout.php">logout</a>

<br><br>
<a href="myBooks.php">My Books</a> <br>
<a href="allBooks.php">All Books</a>