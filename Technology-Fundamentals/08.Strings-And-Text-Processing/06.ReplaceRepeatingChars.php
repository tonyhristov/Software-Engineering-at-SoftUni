<?php
$str = readline();
$pattern = '/(.)\1+/';

echo preg_replace($pattern, '$1', $str);