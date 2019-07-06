<?php


namespace App\Data;


class UserDTO
{
    private const USERNAME_MIN_LENGTH = 4;
    private const USERNAME_MAX_LENGTH = 255;

    private const PASSWORD_MIN_LENGTH = 4;
    private const PASSWORD_MAX_LENGTH = 255;

    private const FULL_NAME_MIN_LENGTH = 5;
    private const FULL_NAME_MAX_LENGTH = 255;

    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $username;

    /**
     * @var string
     */
    private $password;

    /**
     * @var string
     */
    private $fullName;

    /**
     * @var string
     */
    private $bornOn;


    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param $id
     * @return UserDTO
     */
    public function setId($id): UserDTO
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * @param $username
     * @return UserDTO
     * @throws \Exception
     */
    public function setUsername($username): UserDTO
    {
        DTOValidator::validate(self::USERNAME_MIN_LENGTH, self::USERNAME_MAX_LENGTH,
            $username, "text", "Username");

        $this->username = $username;
        return $this;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param $password
     * @return UserDTO
     * @throws \Exception
     */
    public function setPassword($password): UserDTO
    {
        DTOValidator::validate(self::PASSWORD_MIN_LENGTH, self::PASSWORD_MAX_LENGTH,
            $password, "text", "Password");

        $this->password = $password;
        return $this;
    }

    /**
     * @return string
     */
    public function getFullName()
    {
        return $this->fullName;
    }

    /**
     * @param $fullName
     * @return UserDTO
     * @throws \Exception
     */
    public function setFullName($fullName): UserDTO
    {
        DTOValidator::validate(
            self::FULL_NAME_MIN_LENGTH,
            self::FULL_NAME_MAX_LENGTH,
            $fullName,
            "text",
            "Full Name");

        $this->fullName = $fullName;
        return $this;
    }

    /**
     * @return string
     */
    public function getBornOn()
    {
        return $this->bornOn;
    }

    /**
     * @param $bornOn
     * @return UserDTO
     */
    public function setBornOn($bornOn): UserDTO
    {
        $this->bornOn = $bornOn;
        return $this;
    }
}
