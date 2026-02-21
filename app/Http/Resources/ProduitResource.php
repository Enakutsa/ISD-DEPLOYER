<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProduitResource extends JsonResource
{
    /**
     * Transforme le modèle Produit en tableau JSON.
     *
     * @param \Illuminate\Http\Request $request
     * @return array<string, mixed>
     */
    public function toArray($request): array
    {
        return [
            'id_produit'    => $this->id_produit,
            'titre'         => $this->titre,
            'description'   => $this->description,
            'prix'          => $this->prix,
            'statut'        => $this->statut,

            // ✅ formatage correct de la date
            'date_creation' => $this->date_creation?->toDateTimeString(),

            // ✅ Relations
            'pays'          => new PaysResource($this->whenLoaded('pays')),
            'images'        => ImageResource::collection($this->whenLoaded('images')),
            'commentaires'  => CommentaireResource::collection($this->whenLoaded('commentaires')),
        ];
    }
}