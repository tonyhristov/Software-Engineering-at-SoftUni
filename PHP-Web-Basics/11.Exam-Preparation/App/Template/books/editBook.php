<?php
/**
 * @var \App\Data\EditBookDTO $data
 */
?>

<h1>EDIT BOOK</h1>

<a href="profil.php">My Profile</a>
<br>

<form method="post">
    Book Title: <label>
        <input type="text" name="title" value="<?= $data->getBook()->getTitle(); ?>"/>
    </label> <br/>
    Book Author: <label>
        <input type="text" name="author" value="<?= $data->getBook()->getAuthor(); ?>"/>
    </label><br/>
    Description: <label>
        <textarea rows="5" name="description"><?= $data->getBook()->getDescription();?></textarea>
    </label><br/>
    Image URL: <label>
        <input type="text" name="image_url"/>
    </label><br/>
    Genre: <label>
        <select name="genre_id"><br/>
            <?php foreach ($data->getGenres() as $genre): ?>
                <?php if ($data->getBook()->getGenre()->getId() === $genre->getId()): ?>
                    <option selected="selected" value="<?= $genre->getId(); ?>"><?= $genre->getName(); ?></option>
                <?php else: ?>
                    <option value="<?= $genre->getId(); ?>"><?= $genre->getName(); ?></option>
                <?php endif; ?>
            <?php endforeach; ?>
        </select>
    </label><br/>
    <img src="<?= $data->getBook()->getImageURL(); ?>" alt="None" width="200" height="100" /><br />
    <input type="submit" value="Edit" name="edit"/><br/>
</form>