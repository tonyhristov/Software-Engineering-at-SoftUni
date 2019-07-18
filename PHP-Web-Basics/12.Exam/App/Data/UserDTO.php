<?php


namespace App\Data;


class UserDTO
{
    private const EMAIL_MIN_LENGTH = 4;
    private const EMAIL_MAX_LENGTH = 255;

    private const PASSWORD_MIN_LENGTH = 4;
    private const PASSWORD_MAX_LENGTH = 255;

    private const NAME_MIN_LENGTH = 3;
    private const NAME_MAX_LENGTH = 255;


    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $email;

    /**
     * @var string
     */
    private $password;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $phone;

    /**
     * @var float
     */
    private $money_spent;

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
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param $email
     * @return UserDTO
     * @throws \Exception
     */
    public function setEmail($email): UserDTO
    {
        DTOValidator::validate(self::EMAIL_MIN_LENGTH, self::EMAIL_MAX_LENGTH,
            $email, "text", "Username");

        $this->email = $email;
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
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param $name
     * @return UserDTO
     * @throws \Exception
     */
    public function setName($name): UserDTO
    {
        DTOValidator::validate(
            self::NAME_MIN_LENGTH,
            self::NAME_MAX_LENGTH,
            $name,
            "text",
            "Full Name");

        $this->name = $name;
        return $this;
    }

    /**
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * @param $phone
     * @return UserDTO
     */
    public function setPhone($phone): UserDTO
    {
        $this->phone = $phone;
        return $this;
    }

    /**
     * @return float
     */
    public function getMoneySpent()
    {
        return $this->money_spent;
    }

    /**
     * @param float $money_spent
     * @return UserDTO
     */
    public function setMoneySpent(float $money_spent): UserDTO
    {
        $this->money_spent = $money_spent;
        return $this;
    }
}
