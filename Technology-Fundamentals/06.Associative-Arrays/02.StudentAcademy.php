<?php
$count = readline();

$students = [];
$gradeCount = [];
for ($i = 0; $i < $count; $i++) {
    $student = readline();
    $studentGrade = readline();

    if (!key_exists($student, $students)) {
        $students[$student] = $studentGrade;
        $gradeCount[$student] = 1;
    } else {
        $students[$student] += $studentGrade;
        $gradeCount[$student] += 1;
    }
}

foreach ($students as $student => $sumGrade) {
    $sum = $students[$student];
    $avgGrade = $gradeCount[$student];
    $avg = $sum / $avgGrade;
    $students[$student] = $avg;
}

arsort($students);

foreach ($students as $student => $avg) {
    if ($avg >= 4.5) {
        printf("$student -> %.2f\n", $avg);
    }
}