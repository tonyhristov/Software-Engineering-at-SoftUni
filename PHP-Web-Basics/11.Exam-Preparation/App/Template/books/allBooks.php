<?php /** @var \App\Data\BookDTO[] $data */ ?>

<h1>MY BOOKS</h1>

<a href="addBook.php">Add new book</a> |
<a href="profile.php">My Profile</a> |
<a href="logout.php">logout</a>

<br /><br />

<table border="1">
    <thead>
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Genre</th>
        <th>Added By User</th>
        <th>Details</th>
    </tr>
    </thead>

    <tbody>
    <?php foreach ($data as $bookDTO): ?>
        <tr>
            <td><?= $bookDTO->getTitle(); ?></td>
            <td><?= $bookDTO->getAuthor(); ?></td>
            <td><?= $bookDTO->getGenre()->getName(); ?></td>
            <td><?= $bookDTO->getUser()->getUsername() ?></td>
            <td><a href="viewBook.php?id=<?= $bookDTO->getId(); ?>">Details</a></td>
        </tr>
    <?php endforeach; ?>
    </tbody>

</table>