<?php

namespace App\Http;

use App\Data\ErrorDTO;
use App\Data\UserDTO;
use App\Http\UserHttpHandlerAbstract;
use App\Service\UserServiceInterface;

class UserHttpHandler extends UserHttpHandlerAbstract
{
    public function index(UserServiceInterface $userService)
    {
        $this->render("home/index");
    }

    public function all(UserServiceInterface $userService)
    {
        $this->render("users/all", $userService->getAll());
    }

    public function edit(UserServiceInterface $userService, array $formData = [])
    {
        if ($userService->isLogged()) {
            $this->redirect("login.php");
        }

        $currentUser = $userService->currentUser();

        if (isset($formData["edit"])) {
            $this->handleEditProcess($userService, $formData);
        } else {
            $this->render("users/profile", $currentUser);
        }
    }

    public function login(UserServiceInterface $userService, array $formData = [])
    {
        if (isset($formData["login"])) {
            $this->handleLoginProcess($userService, $formData);
        } else {
            $this->render("users/login");
        }
    }

    public function register(UserServiceInterface $userService, array $formData = [])
    {
        if (isset($formData["register"])) {
            $this->handleRegisterProcess($userService, $formData);
        } else {
            $this->render("users/register");
        }
    }

    private function handleRegisterProcess($userService, $formData)
    {
        $user = $this->dataBinder->bind($formData, UserDTO::class);

//        $user = UserDTO::create(
//            $formData["username"],
//            $formData["password"],
//            $formData["first_name"],
//            $formData["last_name"],
//            $formData["born_on"]
//        );

        /**
         * @var UserServiceInterface $userService
         */
        if ($userService->register($user, $formData["confirm_password"])) {
            $this->redirect("login.php");
        } else {
            $this->render("users/register", null, new ErrorDTO("Password mismatch."));
        }
    }

    private function handleLoginProcess(UserServiceInterface $userService, array $formData)
    {
        $user = $userService->login($formData["username"], $formData["password"]);

        if (null !== $user) {
            $_SESSION["id"] = $user->getId();
            $this->redirect("profile.php");
        } else {
            $this->render("users/login", null, new ErrorDTO("Username does not exist or password mismatch."));
        }
    }

    private function handleEditProcess(UserServiceInterface $userService, array $formData)
    {
        $user = $this->dataBinder->bind($formData, UserDTO::class);

//        $user = $userService->currentUser();
//        $user->setUsername($formData["username"]);
//        $user->setPassword($formData["password"]);
//        $user->setFirstName($formData["first_name"]);
//        $user->setLastName($formData["last_name"]);
//        $user->setBornOn($formData["born_on"]);


        if ($userService->edit($user)) {
            $this->redirect("profile.php");
        }
    }
}
