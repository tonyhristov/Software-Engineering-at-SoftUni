<?php


namespace App\Data;


class UserDTO
{

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

    public static function create($username, $password, $fullName, $bornOn,int $id = null)
    {
        return (new UserDTO())
            ->setUsername($username)
            ->setPassword($password)
            ->setFullName($fullName)
            ->setBornOn($bornOn)
            ->setId($id);
    }

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
     */
    public function setUsername($username): UserDTO
    {
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
     */
    public function setPassword($password): UserDTO
    {
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
     */
    public function setFullName($fullName): UserDTO
    {
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
