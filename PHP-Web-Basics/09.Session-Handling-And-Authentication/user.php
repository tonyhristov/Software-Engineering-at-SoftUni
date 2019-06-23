<?php

use Database\PDODatabase;

spl_autoload_register();


$pdo = new PDO("mysql:host=localhost; dbname=session_exercise",
    "root",
    "");

$db = new PDODatabase($pdo);

$allUsers = $db
    ->query("SELECT * FROM users")
    ->execute()
    ->fetch(UserDTO::class);

/**
 * @var UserDTO $user
 */
foreach ($allUsers as $user) {
    echo $user->getUsername() . "<br/>";
}
