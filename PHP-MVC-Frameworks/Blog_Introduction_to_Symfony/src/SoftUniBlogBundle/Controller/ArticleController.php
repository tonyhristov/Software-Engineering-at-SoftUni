<?php

namespace SoftUniBlogBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use SoftUniBlogBundle\Entity\Article;
use SoftUniBlogBundle\Entity\User;
use SoftUniBlogBundle\Form\ArticleType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ArticleController extends Controller
{
    /**
     * @Route("/create", name="article_create")
     *
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function create(Request $request)
    {
        $article = new Article();
        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            $article->setAuthor($this->getUser());
            $article->setViewCount(0);
            $em = $this->getDoctrine()->getManager();
            $em->persist($article);
            $em->flush();

            $this->addFlash("created", "Congrats you create article successfully!");
            return $this->redirectToRoute("blog_index");
        }

        return $this->render('articles/create.html.twig', ["form" => $form->createView()]);
    }

    /**
     * @Route("/article/{id}", name="article_view")
     *
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function view($id)
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);


        if (null === $article) {
            return $this->redirectToRoute("blog_index");
        }

        $article->setViewCount($article->getViewCount() + 1);
        $em = $this->getDoctrine()->getManager();
        $em->persist($article);
        $em->flush();

        return $this->render('articles/article.html.twig', ["article" => $article]);
    }

    /**
     * @Route("/edit/{id}", name="article_edit")
     *
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, $id)
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if (null === $article) {
            return $this->redirectToRoute("blog_index");
        }

        if (!$this->isAuthorOrAdmin($article)) {
            return $this->redirectToRoute("blog_index");
        }

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->merge($article);
            $em->flush();

            $this->addFlash("edited", "Congrats you edit your article successfully!");
            return $this->redirectToRoute("blog_index");
        }

        return $this->render('articles/edit.html.twig', ["form" => $form->createView(), "article" => $article]);
    }

    /**
     * @Route("/delete/{id}", name="article_delete")
     *
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @param Request $request
     * @param $id
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function delete(Request $request, $id)
    {
        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);
        $form = $this->createForm(ArticleType::class, $article);
        $form->handleRequest($request);

        if (null === $article) {
            return $this->redirectToRoute("blog_index");
        }

        if (!$this->isAuthorOrAdmin($article)) {
            return $this->redirectToRoute("blog_index");
        }

        if ($form->isSubmitted()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($article);
            $em->flush();

            $this->addFlash("deleted", "Oops you deleted your article!");
            return $this->redirectToRoute("blog_index");
        }

        return $this->render('articles/delete.html.twig', ["form" => $form->createView(), "article" => $article]);
    }

    /**
     * @param Article $article
     * @return bool
     */
    private function isAuthorOrAdmin(Article $article)
    {
        /**
         * @var User $currentUser
         */
        $currentUser = $this->getUser();
        if (!$currentUser->isAuthor($article) && !$currentUser->isAdmin()) {
            return false;
        } else {
            return true;
        }
    }

    /**
     * @Route("/articles/my_articles", name="my_articles")
     *
     * @Security("is_granted('IS_AUTHENTICATED_FULLY')")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function getAllArticlesByUser()
    {
        $articles = $this
            ->getDoctrine()
            ->getRepository(Article::class)
            ->findBy(["author" => $this->getUser()]);

        return $this->render("articles/my_articles.html.twig", ["articles" => $articles]);
    }
}
