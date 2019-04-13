<?php
$input = readline();

$artistPattern = '/^[A-Z][a-z\' ]+$/';;
$songPattern = '/^[A-Z ]+$/';

while (true) {
    if ($input === "end") {
        break;
    }

    $args = explode(":", $input);
    $artist = $args[0];
    $song = $args[1];

    if (preg_match($artistPattern, $artist) && preg_match($songPattern, $song)) {
        $key = strlen($artist);
        for ($i = 0; $i < $key; $i++) {
            $currentChar = $artist[$i];
            $newChar = "";
            $newOrd = ord($currentChar) + $key;
            if ($currentChar === " " || $currentChar === "'") {
                $newOrd = ord($currentChar);
            } else if (ctype_upper($currentChar)) {
                if ($newOrd > 90) {
                    $newOrd = $newOrd - 90 + 64;
                }
            } else if (ctype_lower($currentChar)) {
                if ($newOrd > 122) {
                    $newOrd = $newOrd - 122 + 96;
                }
            }
            $newChar = chr($newOrd);
            $artist[$i] = $newChar;
        }


        for ($i = 0; $i < strlen($song); $i++) {
            $currentChar = $song[$i];
            $newChar = "";
            $newOrd = ord($currentChar) + $key;
            if ($currentChar === " " || $currentChar === "'") {
                $newOrd = ord($currentChar);
            } else if (ctype_upper($currentChar)) {
                if ($newOrd > 90) {
                    $newOrd = $newOrd - 90 + 64;
                }
            }
            $newChar = chr($newOrd);
            $song[$i] = $newChar;

        }

        echo "Successful encryption: $artist@$song\n";
    } else {
        echo "Invalid input!\n";

    }
    $input = readline();
}

