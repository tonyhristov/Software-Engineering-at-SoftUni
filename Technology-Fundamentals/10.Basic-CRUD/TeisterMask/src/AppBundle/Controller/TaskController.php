<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Task;
use AppBundle\Form\TaskType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class TaskController extends Controller
{
    /**
     * @param Request $request
     * @Route("/", name="index")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        $openTasks = $this->getDoctrine()->getRepository(Task::class)->findBy(array("status" => "Open"));
        $inProgressTasks = $this->getDoctrine()->getRepository(Task::class)->findBy(array("status" => "In Progress"));
        $finishedTasks = $this->getDoctrine()->getRepository(Task::class)->findBy(array("status" => "Finished"));

        return $this->render(":task:index.html.twig", ["openTasks" => $openTasks,
            "inProgressTasks" => $inProgressTasks, "finishedTasks" => $finishedTasks]);
    }

    /**
     * @param Request $request
     * @Route("/create", name="create")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function create(Request $request)
    {
        $task = new Task();
        $form = $this->createForm(TaskType::class, $task);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();

            return $this->redirectToRoute("index");
        }
        return $this->render(":task:create.html.twig", ["form" => $form->createView()]);
    }

    /**
     * @Route("/edit/{id}", name="edit")
     *
     * @param $id
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $task = $this->getDoctrine()->getRepository(Task::class)->find($id);

        if ($task === null) {
            return $this->redirectToRoute("index");
        }

        $form = $this->createForm(TaskType::class, $task);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($task);
            $em->flush();

            return $this->redirectToRoute("index");
        }
        return $this->render(":task:edit.html.twig", ["task" => $task, "form" => $form->createView()]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     *
     * @param $id
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function delete($id, Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $task = $this->getDoctrine()->getRepository(Task::class)->find($id);

        if ($task === null) {
            return $this->redirectToRoute("index");
        }

        $form = $this->createForm(TaskType::class, $task);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($task);
            $em->flush();

            return $this->redirectToRoute("index");
        }
        return $this->render(":task:delete.html.twig", ["task" => $task, "form" => $form->createView()]);
    }
}
