<?php /** @var \App\Data\EditOfferDTO $data */ ?>
<?php /** @var array $errors |null */ ?>

<h1>Edit Offer</h1>

<a href="profile.php">My Profile</a>

<form method="post">
    Town: <label>
        <select name="town"><br/>
            <?php foreach ($data->getTown() as $town): ?>
                <?php if ($data->getOffer()->getTown()->getId() === $town->getId()): ?>
                    <option selected="selected" value="<?= $town->getId(); ?>"><?= $town->getName(); ?></option>
                <?php else: ?>
                    <option value="<?= $town->getId(); ?>"><?= $town->getName(); ?></option>
                <?php endif; ?>
            <?php endforeach; ?>
        </select>
    </label><br/>

    Room Type:<label>
        <select name="room">
            <?php foreach ($data->getRoom() as $room): ?>
                <?php if ($data->getOffer()->getRoom()->getId() === $room->getId()): ?>
                    <option selected="selected" value="<?= $room->getId(); ?>"><?= $room->getType(); ?></option>
                <?php else: ?>
                    <option value="<?= $room->getId(); ?>"><?= $room->getType(); ?></option>
                <?php endif; ?>
            <?php endforeach; ?>
        </select><br/>
    </label>
    Image URL: <label>
        <input type="text" name="picture_url" value="<?= $data->getOffer()->getPictureURL(); ?>"/>
    </label><br/>
    Description: <label>
        <textarea rows="5" name="description"><?= $data->getOffer()->getDescription(); ?></textarea>
    </label><br/>
    Days: <label>
        <input type="text" name="days" value="<?= $data->getOffer()->getDays(); ?>"/>
    </label> <br/>
    Price: <label>
        <input type="text" name="price" value="<?= $data->getOffer()->getPrice(); ?>"/>
    </label><br/>

    <input type="submit" value="Edit Offer" name="edit"/><br/>
</form>
