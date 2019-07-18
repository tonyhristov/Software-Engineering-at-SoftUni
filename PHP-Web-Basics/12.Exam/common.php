<?php
session_start();
spl_autoload_register();

$template = new \Core\Template();
$dataBinder = new \Core\DataBinder();

$dbInfo = parse_ini_file("config/db.ini");
$pdo = new PDO($dbInfo["dsn"], $dbInfo["user"], $dbInfo["pass"]);

$db = new \Database\PDODatabase($pdo);

$userRepository = new \App\Repository\UserRepository($db, $dataBinder);
$roomRepository = new \App\Repository\Rooms\RoomRepository($db, $dataBinder);
$townRepository = new \App\Repository\Towns\TownRepository($db, $dataBinder);
$offerRepository = new \App\Repository\Offers\OfferRepository($db, $dataBinder);

$encryptionService = new \App\Service\Encryption\ArgonEncryptionService();
$userService = new \App\Service\UserService($userRepository, $encryptionService);
$roomService = new \App\Service\Rooms\RoomService($roomRepository);
$townService = new \App\Service\Towns\TownService($townRepository);
$offerService = new \App\Service\Offers\OfferService($offerRepository, $userService);

$userHttpHandler = new \App\Http\UserHttpHandler($template, $dataBinder);
$offerHttpHandler = new \App\Http\OfferHttpHandler($template, $dataBinder,
    $offerService, $userService, $roomService, $townService);
