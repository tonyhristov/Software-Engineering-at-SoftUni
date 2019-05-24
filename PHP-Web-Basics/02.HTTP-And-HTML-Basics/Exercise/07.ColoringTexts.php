<form>
    <textarea cols="50" name="input"></textarea><br/>
    <input type="submit" value="Color text">
</form>

<?php
$text = $_GET["input"];

if (isset($text)) {

    for ($i = 0; $i < strlen($text); $i++) {
        if ($text[$i] != " ") {
            $currentSymbol = ord($text[$i]);

            $result = "";
            if ($currentSymbol % 2 === 0) {
                $result .= "<span style='color: red'>$text[$i] </span>";
            } else {
                $result .= "<span style='color: blue'>$text[$i] </span>";
            }
            echo $result;
        }
    }
}