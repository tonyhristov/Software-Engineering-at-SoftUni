<h2>Login Form</h2>

<?php
/**
 * @var array $errors
 * @var \App\Data\UserDTO $data
 */
?>

<?php if ($data != ""):?>
    <p style="color: green">
            Congratulation, <?= $data ?>. You can now login to our site!
    </p>
<?php endif; ?>

<?php foreach ($errors as $error): ?>
    <p style="color: red"><?= $error ?></p>
    <br/><br/>
<?php endforeach; ?>

<form method="post">
    <label>
        Email: <input type="text" name="username" "/> <br/>
    </label>
    <label>
        Password: <input type="password" name="password" "/><br/>
    </label>
    <label>
        <input type="submit" name="login" value="Login"/><br/>
    </label>
</form>

<a href="index.php">back</a>
