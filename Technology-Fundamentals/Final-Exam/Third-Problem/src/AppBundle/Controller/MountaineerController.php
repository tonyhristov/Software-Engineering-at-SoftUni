<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Mountaineer;
use AppBundle\Form\MountaineerType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MountaineerController extends Controller
{
    /**
     * @Route("/", name="homepage")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index()
    {
        $mountaineer = new Mountaineer();
        $mountaineer = $this->getDoctrine()->getRepository(Mountaineer::class)->findAll();
        return $this->render(":mountaineer:index.html.twig", ["mountaineers" => $mountaineer]);
    }

    /**
     * @Route("/create", name="create")
     *
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function create(Request $request)
    {
        $mountaineer = new Mountaineer();
        $form = $this->createForm(MountaineerType::class, $mountaineer);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($mountaineer);
            $em->flush();
            return $this->redirectToRoute("homepage");
        }
        return $this->render(":mountaineer:create.html.twig", ["form" => $form->createView()]);
    }

    /**
     * @Route("/edit/{id}", name="edit")
     *
     * @param $id
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */

    public function edit($id, Request $request)
    {
        $mountaineer = $this->getDoctrine()->getRepository(Mountaineer::class)->find($id);
        $form = $this->createForm(MountaineerType::class, $mountaineer);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($mountaineer);
            $em->flush();

            return $this->redirectToRoute("homepage");
        }
        return $this->render("mountaineer/edit.html.twig", ["mountaineer" => $mountaineer, "form" => $form->createView()]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     *
     * @param $id
     * @param Request $request
     *
     * @return \Symfony\Component\HttpFoundation\RedirectResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function delete($id, Request $request)
    {
        $mountaineer = $this->getDoctrine()->getRepository(Mountaineer::class)->find($id);
        $form = $this->createForm(MountaineerType::class, $mountaineer);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($mountaineer);
            $em->flush();

            return $this->redirectToRoute("homepage");
        }
        return $this->render("mountaineer/delete.html.twig", ["mountaineer" => $mountaineer, "form" => $form->createView()]);
    }
}
