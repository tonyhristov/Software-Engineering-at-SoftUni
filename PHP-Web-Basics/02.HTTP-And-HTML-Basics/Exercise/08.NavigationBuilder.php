<form>
    Categories: <input type="text" name="categories"> <br/>
    Tags: <input type="text" name="tags"><br/>
    Months: <input type="text" name="months"><br/>

    <input type="submit" value="Generate"><br/>
</form>

<?php

$categories = explode(", ", $_GET["categories"]);
$tags = explode(", ", $_GET["tags"]);
$months = explode(", ", $_GET["months"]);

if (isset($categories) && isset($tags) && isset($months)) {
    echo "<h2>Categories</h2> <ul>";
    foreach ($categories as $key) {
        echo "<li>$key</li>";
    }

    echo "</ul> <h2>Tags</h2> <ul>";
    foreach ($tags as $key) {
        echo "<li>$key</li>";
    }
    
    echo "</ul> <h2>Months</h2> <ul>";
    foreach ($months as $key) {
        echo "<li>$key</li>";
    }
    echo "</ul>";
}