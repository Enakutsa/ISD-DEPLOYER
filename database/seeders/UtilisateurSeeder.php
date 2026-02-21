<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Utilisateur;
use Illuminate\Support\Facades\Hash;

class UtilisateurSeeder extends Seeder
{
    public function run(): void
    {
        Utilisateur::create([
            'nom' => 'Admin',
            'prenom' => 'Test',
            'email' => 'admin@test.com',
            'telephone' => '90000001',
            'mot_de_passe' => Hash::make('admin123'),
            'role' => 'admin',
            'is_admin' => true,
            'statut' => 'actif',
            'date_creation' => now(),
        ]);

        Utilisateur::create([
            'nom' => 'Client',
            'prenom' => 'Test',
            'email' => 'client@test.com',
            'telephone' => '90000002',
            'mot_de_passe' => Hash::make('client123'),
            'role' => 'client',
            'is_admin' => false,
            'statut' => 'actif',
            'date_creation' => now(),
        ]);
    }
}