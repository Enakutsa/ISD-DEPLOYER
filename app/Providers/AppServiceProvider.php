<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        URL::forceScheme('https');
        
        Relation::enforceMorphMap([
            'utilisateur' => 'App\Models\Utilisateur',
            'formation' => 'App\Models\Formation',
            'produit' => 'App\Models\Produit',
            'commande' => 'App\Models\Commande',
            'blog' => 'App\Models\Blog',
            'user' => 'App\Models\User',
        ]);
    }
}