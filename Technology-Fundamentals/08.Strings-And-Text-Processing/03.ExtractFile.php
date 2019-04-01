<?php

$input = readline();
$file = substr($input, strrpos($input, "\\") + 1);

$fileName = substr($file, 0, strrpos($file, "."));
$fileExtension = substr($file, strrpos($file, ".") + 1);

echo "File name: $fileName\n";
echo "File extension: $fileExtension\n";