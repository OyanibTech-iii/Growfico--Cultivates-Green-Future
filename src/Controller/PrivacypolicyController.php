<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class PrivacypolicyController extends AbstractController
{
    #[Route('/privacypolicy', name: 'app_privacypolicy')]
    public function index(): Response
    {
        return $this->render('privacypolicy/index.html.twig', [
            'controller_name' => 'PrivacypolicyController',
        ]);
    }
}
