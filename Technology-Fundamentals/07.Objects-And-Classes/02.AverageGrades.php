<?php

Class Student
{
    private $name;
    private $grades;
    private $avgGrade;

    /**
     * Student constructor.
     * @param $name
     * @param $grades
     */
    public function __construct($name, $grades, $avgGrade)
    {
        $this->name = $name;
        $this->grades = $grades;
        $this->avgGrade = $avgGrade;
    }

    /**
     * @return mixed
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return mixed
     */
    public function getGrades()
    {
        return $this->grades;
    }

    /**
     * @return mixed
     */
    public function getAvgGrade()
    {
        return $this->avgGrade;
    }

}

$n = readline();

$students = [];
while ($n-- > 0) {
    $input = explode(" ", readline());
    $name = $input[0];
    $count = count($input);
    $grades = [];
    for ($i = 1; $i < $count; $i++) {
        $grades[] = $input[$i];
    }
    $avg = array_sum($grades) / count($grades);
    $student = new Student($name, $grades, $avg);
    $students[] = $student;
}

usort($students, function (Student $s1, Student $s2) {
    $avg1 = $s1->getAvgGrade();
    $avg2 = $s2->getAvgGrade();
    $name1 = $s1->getName();
    $name2 = $s2->getName();
    if ($name1 === $name2) {
        return $avg2 <=> $avg1;
    } else {
        return $name1 <=> $name2;
    }
});

foreach ($students as $st) {
    $name = $st->getName();
    $avg = $st->getAvgGrade();

    if ($avg >= 5) {
        $avg = number_format($avg, 2, ".", "");
        echo "$name -> $avg\n";
    }
}
