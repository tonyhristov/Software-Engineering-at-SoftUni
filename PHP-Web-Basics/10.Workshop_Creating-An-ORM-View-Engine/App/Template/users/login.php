<h2>Login Form</h2>

<?php
/**
 * @var \App\Data\ErrorDTO $error
 */
?>


<?php if ($error): ?>
    <p style="color: red"><?= $error->getMessage(); ?></p>

<?php endif; ?>

<form method="post">
    <label>
        Username: <input type="text" name="username" "/> <br/>
    </label>
    <label>
        Password: <input type="password" name="password" "/><br/>
    </label>
    <label>
        <input type="submit" name="login" value="Login"/><br/>
    </label>
</form>

<a href="index.php">back</a>
