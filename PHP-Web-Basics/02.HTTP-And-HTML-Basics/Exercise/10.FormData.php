<form>
    <input type="text" name="name" placeholder="Name"><br/>
    <input type="text" name="age" placeholder="Age"><br/>
    <input type="radio" name="gender" value="male">Male<br/>
    <input type="radio" name="gender" value="female">Female<br/>

    <input type="submit">
</form>

<?php

$name = $_GET["name"];
$age = $_GET["age"];
$gender = $_GET["gender"];

if (isset($name) && isset($age) && isset($gender)) {
    echo "My name is $name. I am $age years old. I am $gender.";
}