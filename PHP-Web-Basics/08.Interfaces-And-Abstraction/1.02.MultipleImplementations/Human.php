<?php

interface Human
{
    public function setName(string $name): void;

    public function setAge(int $age): void;

    public function setID(string $id): void;

    public function setBirthday(string $birthday): void;

}
