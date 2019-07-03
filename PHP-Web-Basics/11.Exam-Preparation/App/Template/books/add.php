<?php
/**
 * @var \App\Data\GenreDTO[] $data
 */
?>

<h1>ADD NEW BOOK</h1>

<a href="profil.php">My Profile</a>
<br>
<form method="post">
    <label>
        Book Title: <input type="text" name="title"><br>
    </label>
    <label>
        Book Author: <input type="text" name="author"><br>
    </label>
    <label>
        Description: <textarea rows="5" name="description"></textarea><br>
    </label>
    <label>
        Image URL: <input type="text" name="image_url"><br>
    </label>
    <label>
        Genre: <select name="genre_id">
            <?php foreach ($data as $genre): ?>
                <option value="<?= $genre->getId(); ?>">
                    <?= $genre->getName() ?>
                </option>
            <?php endforeach; ?>
        </select><br>
    </label>
    <input type="submit" value="Add" name="add"><br>
</form>