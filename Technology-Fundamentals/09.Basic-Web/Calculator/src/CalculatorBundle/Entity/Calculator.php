<?php
/**
 * Created by PhpStorm.
 * User: Marto
 * Date: 26/11/18
 * Time: 14:03
 */

namespace CalculatorBundle\Entity;

class Calculator
{

    private $leftOperand;
    private $rightOperand;
    private $operator;

    /**
     * @return mixed
     */
    public function getLeftOperand()
    {
        return $this->leftOperand;
    }

    /**
     * @param mixed $leftOperand
     */
    public function setLeftOperand($leftOperand): void
    {
        $this->leftOperand = $leftOperand;
    }

    /**
     * @return mixed
     */
    public function getRightOperand()
    {
        return $this->rightOperand;
    }

    /**
     * @param mixed $rightOperand
     */
    public function setRightOperand($rightOperand): void
    {
        $this->rightOperand = $rightOperand;
    }

    /**
     * @return mixed
     */
    public function getOperator()
    {
        return $this->operator;
    }

    /**
     * @param mixed $operator
     */
    public function setOperator($operator): void
    {
        $this->operator = $operator;
    }


    public function calculateResult()
    {
        $result = 0;
        $left = $this->getLeftOperand();
        $right = $this->getRightOperand();
        $operator = $this->getOperator();

        switch ($operator) {
            case "+":
                $result = $left + $right;
                break;
            case "-":
                $result = $left - $right;
                break;
            case "*":
                $result = $left * $right;
                break;
            case "/":
                if ($right == 0) {
                    $result = "You can't divide by zero!";
                } else {
                    $result = $left / $right;
                }
                break;
            case "^":
                $result = pow($left, $right);
                break;
        }
        return $result;
    }
}