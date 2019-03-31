<?php

$password = readline();

$validLen = hasValidLength($password);
$validContent = hasValidContent($password);
$enoughDigits = hasEnoughDigits($password);

if (!$validLen) {
    echo "Password must be between 6 and 10 characters" . PHP_EOL;
}
if (!$validContent) {
    echo "Password must consist only of letters and digits" . PHP_EOL;
}
if (!$enoughDigits) {
    echo "Password must have at least 2 digits" . PHP_EOL;
}

if ($validLen && $validContent && $enoughDigits) {
    echo "Password is valid" . PHP_EOL;
}

function hasValidLength(string $text): bool
{
    $len = strlen($text);
    if ($len < 6 || $len > 10) {
        return false;
    }
    return true;
}

function hasValidContent(string $text): bool
{
    if (ctype_alnum($text)) {
        return true;
    }
    return false;
}

function hasEnoughDigits(string $text): bool
{
    $digits = 0;
    $len = strlen($text);
    for ($i = 0; $i < $len; $i++) {
        $c = $text[$i];
        if (ctype_digit($c)) {
            $digits++;
        }
    }
    if ($digits < 2) {
        return false;
    }
    return true;
}

