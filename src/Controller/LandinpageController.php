<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class LandinpageController extends AbstractController
{
    #[Route('/', name: 'app_landinpage')]
    public function index(): Response
    {
        return $this->render('landinpage/index.html.twig', [
            'controller_name' => 'LandinpageController',
        ]);
    }
}
