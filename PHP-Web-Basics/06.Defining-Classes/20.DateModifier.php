<?php

class DateModifier
{
    public function getDayDifference(string $date1, string $date2): string
    {
        $date1 = date_create(str_replace(' ', '-', $date1));
        $date2 = date_create(str_replace(' ', '-', $date2));
        return date_diff($date1, $date2)->format('%a');
    }
}

$date1 = trim(readline());
$date2 = trim(readline());
$diff = new DateModifier();
echo $diff->getDayDifference($date1, $date2);
