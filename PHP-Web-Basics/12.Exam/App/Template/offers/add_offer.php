<?php /** @var \App\Data\InsertDTO[] $data */ ?>
<?php /** @var array $errors |null */ ?>

<h1>Add New Offer</h1>

<a href="profile.php">My Profile</a>

<form method="post">
    Town: <label>
        <select name="town"><br/>
            <?php foreach ($data->getTown() as $town): ?>
                <option value="<?= $town->getId(); ?>">
                    <?= $town->getName(); ?>
                </option>
            <?php endforeach; ?>
        </select>
    </label><br/>

    Room Type:<label>
        <select name="room">
            <?php foreach ($data->getRoom() as $room): ?>
                <option value="<?= $room->getId(); ?>">
                    <?= $room->getType(); ?>
                </option>
            <?php endforeach; ?>
        </select><br/>
    </label>
    Image URL: <label>
        <input type="text" name="picture_url"/>
    </label><br/>
    Description: <label>
        <textarea rows="5" name="description"></textarea>
    </label><br/>
    Days: <label>
        <input type="text" name="days"/>
    </label> <br/>
    Price: <label>
        <input type="text" name="price"/>
    </label><br/>

    <input type="submit" value="Add Offer" name="add"/><br/>
</form>
