<?php
session_start();
spl_autoload_register();

$template = new \Core\Template();
$dataBinder = new \Core\DataBinder();

$dbInfo = parse_ini_file("config/db.ini");
$pdo = new PDO($dbInfo["dsn"], $dbInfo["user"], $dbInfo["pass"]);

$db = new \Database\PDODatabase($pdo);
$userRepository = new \App\Repository\UserRepository($db);
$encryptionService = new \App\Service\Encryption\ArgonEncryptionService();
$userService = new \App\Service\UserService($userRepository, $encryptionService);
$userHttpHandler = new \App\Http\UserHttpHandler($template, $dataBinder);
