<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommandeController extends Controller
{
    public function mesCommandes()
    {
        return response()->json([
            'message' => 'Cette route est prête. La logique sera ajoutée dans le module commandes.'
        ]);
    }
}