<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategorieProduit extends Model
{
    use HasFactory;

    protected $table = 'categorie_produits';
    protected $primaryKey = 'id_categorie';
    public $timestamps = true;

    protected $fillable = [
        'nom',
        'description',
    ];

    // Relation inverse : une catégorie a plusieurs produits
    public function produits()
    {
        return $this->hasMany(Produit::class, 'id_categorie', 'id_categorie');
    }
}