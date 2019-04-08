<?php


namespace CalculatorBundle\Controller;

use CalculatorBundle\Entity\Calculator;
use CalculatorBundle\Form\CalculatorType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

Class CalculatorController extends Controller
{

    /**
     * @Route ("/",name="index")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        $calculator = new Calculator();
        $form = $this->createForm(CalculatorType::class, $calculator);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $result = $calculator->calculateResult();
            return $this->render("calculator/index.html.twig",
                ["calculator" => $calculator, "result" => $result,
                    "form" => $form->createView()]);

        }

        return $this->render("calculator/index.html.twig");
    }

}