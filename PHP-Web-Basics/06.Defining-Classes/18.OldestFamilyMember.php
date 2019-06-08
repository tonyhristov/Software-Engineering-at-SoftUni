<?php

class Person
{
    private $name;
    private $age;

    /**
     * Person constructor.
     * @param $name
     * @param $age
     */
    public function __construct($name, $age)
    {
        $this->name = $name;
        $this->age = $age;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getAge()
    {
        return $this->age;
    }
}

class Family
{
    private $members;

    /**
     * @var Person
     */
    private $OldestMember;

    public function __construct()
    {
        $this->members = [];
        $this->OldestMember = null;
    }

    public function addMember(Person $person): void
    {
        if ($this->OldestMember === null || $this->OldestMember->getAge() < $person->getAge()) {
            $this->OldestMember = $person;
        }
        $this->members[] = $person;
    }

    public function getOldestMember(): Person
    {
        return $this->OldestMember;
    }
}

$input = readline();
$family = new Family();

for ($i = 0; $i < $input; $i++) {
    list($name, $age) = explode(" ", readline());
    $person = new Person($name, $age);
    $family->addMember($person);
}

echo $family->getOldestMember()->getName() . " " . $family->getOldestMember()->getAge();