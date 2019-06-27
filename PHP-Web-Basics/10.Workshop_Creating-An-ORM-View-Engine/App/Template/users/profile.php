<?php
/**
 * @var \App\Data\UserDTO $data
 */
?>

<h2>Your Profile</h2>

<form method="post">
    <label>
        Username: <input type="text" name="username" value="<?= $data->getUsername(); ?>"/> <br/>
    </label>
    <label>
        Password: <input type="password" name="password"/><br/>
    </label>
    <label>
        Confirm Password: <input type="password" name="confirm_password"/><br/>
    </label>
    <label>
        First Name: <input type="text" name="first_name" value="<?= $data->getFirstName(); ?>"/><br/>
    </label>
    <label>
        Last Name: <input type="text" name="last_name" value="<?= $data->getLastName(); ?>"/><br/>
    </label>
    <label>
        Birthday: <input type="date" name="born_on" value="<?= $data->getBornOn(); ?>"/><br/>
    </label>
    <input type="submit" name="edit" value="Edit"/><br/>
</form>

You can <a href="logout.php">logout</a> or see <a href="all.php">all users</a>.
