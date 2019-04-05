<?php

Class Person
{
    private $name;
    private $id;
    private $age;

    /**
     * Person constructor.
     * @param $name
     * @param $id
     * @param $age
     */
    public function __construct($name, $id, $age)
    {
        $this->setName($name);
        $this->setId($id);
        $this->setAge($age);
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param mixed $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param mixed $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getAge()
    {
        return $this->age;
    }

    /**
     * @param mixed $age
     */
    public function setAge($age)
    {
        $this->age = $age;
    }


}

$people = [];
while (1) {
    $input = readline();
    if ($input === "End") {
        break;
    }
    list($name, $id, $age) = explode(" ", $input);
    $people[] = new Person($name, $id, $age);
}
usort($people, function (Person $p1, Person $p2) {
    $age1 = $p1->getAge();
    $age2 = $p2->getAge();
    return $age1 <=> $age2;
});
foreach ($people as $p) {
    $name = $p->getName();
    $id = $p->getId();
    $age = $p->getAge();

    echo "$name with ID: $id is $age years old.\n";
}