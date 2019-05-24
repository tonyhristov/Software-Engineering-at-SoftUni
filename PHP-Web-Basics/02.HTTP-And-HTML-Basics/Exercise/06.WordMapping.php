<form>
    <textarea cols="50" name="input"></textarea><br/>
    <input type="submit" value="Count words">
</form>

<?php
$input = $_GET["input"];
$pattern = '/[^A-Za-z]+/';
$wordCount = [];

if (isset($input)) {
    $input = array_filter(preg_split($pattern, $input, -1));

    foreach ($input as $item) {
        $item = strtolower($item);
        if (!key_exists($item, $wordCount)) {
            $wordCount[$item] = 1;
        } else {
            $wordCount[$item]++;
        }
    }

    echo "<table border='2'>";
    foreach ($wordCount as $key => $value) {
        echo "<tr><td>$key</td><td>$value</td></tr>";
    }
    echo "</table>";
}