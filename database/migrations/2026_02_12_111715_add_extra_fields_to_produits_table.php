<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('produits', function (Blueprint $table) {
            // Champ marque
            $table->string('marque')->nullable()->after('nom');

            // Champs pour vedette, promo, nouveau
            $table->boolean('est_en_vedette')->default(false)->after('statut');
            $table->boolean('est_nouveau')->default(false)->after('statut');
            $table->boolean('en_promo')->default(false)->after('statut');

            // Champ slug pour SEO
            $table->string('slug')->unique()->nullable()->after('nom');
        });
    }

    public function down(): void
    {
        Schema::table('produits', function (Blueprint $table) {
            $table->dropColumn(['marque', 'est_en_vedette', 'est_nouveau', 'en_promo', 'slug']);
        });
    }
};