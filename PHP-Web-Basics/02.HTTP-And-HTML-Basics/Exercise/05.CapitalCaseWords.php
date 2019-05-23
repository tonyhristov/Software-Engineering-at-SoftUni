<form>
    <textarea rows="10" name="text"></textarea><br>
    <input type="submit" value="Extract">
</form>

<?php
$text = $_GET["text"];
$pattern = '/\b[A-Z]+\b/';

if (isset($text)) {
    preg_match_all($pattern, $text, $matches);

    echo implode(", ", $matches[0]);
}