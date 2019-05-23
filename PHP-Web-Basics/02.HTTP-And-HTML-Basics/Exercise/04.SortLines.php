<?php
$sortedLines = "";
$input = $_GET["lines"];
if (isset($input)) {
    $cities = explode("\n", $input);
    $cities = array_map("trim", $cities);
    $cities = array_filter($cities);
    sort($cities);

    $sortedLines = implode("\n", $cities);
}
?>

<form>
  <textarea rows="10" name="lines"><?= $sortedLines
      ?></textarea> <br>
    <input type="submit" value="Sort">
</form>
