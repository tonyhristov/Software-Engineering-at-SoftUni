<form>
    <div>First Number:</div>
    <input type="number" name="num1"/>
    <div>Second Number:</div>
    <input type="number" name="num2"/>
    <div><input type="submit"/></div>
</form>

<?php

if (isset($_GET["num1"]) && isset($_GET["num2"])) {
    $number1 = $_GET["num1"];
    $number2 = $_GET["num2"];

    $sum = $number1 + $number2;

    echo "$number1 + $number2 = $sum";
}