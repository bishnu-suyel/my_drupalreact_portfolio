<?php

namespace Drupal\contact_form\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class ContactFormController extends ControllerBase
{

    public function submit(Request $request)
    {
        // Get the data from the request
        $data = json_decode($request->getContent(), true);

        // Validate and sanitize the data
        $name = isset($data['name']) ? htmlspecialchars($data['name']) : '';
        $email = isset($data['email']) ? htmlspecialchars($data['email']) : '';
        $subject = isset($data['subject']) ? htmlspecialchars($data['subject']) : '';
        $message = isset($data['message']) ? htmlspecialchars($data['message']) : '';

        // Basic validation
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            return new JsonResponse(['error' => 'All fields are required.'], Response::HTTP_BAD_REQUEST);
        }


        // Return a success response
        return new JsonResponse(['status' => 'success', 'message' => 'Your message has been sent.']);
    }
}
