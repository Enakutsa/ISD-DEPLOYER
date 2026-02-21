<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $this->call([
            UtilisateurSeeder::class,
            TestWorkflowSeeder::class, // ⚡ ajoute ton seeder de test ici
        ]);
    }
}
