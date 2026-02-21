<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('paiements', function (Blueprint $table) {
            // Ajout de la colonne id_formation
            $table->unsignedBigInteger('id_formation')->nullable()->after('id_utilisateur');

            // Clé étrangère vers formations
            $table->foreign('id_formation')
                  ->references('id_formation')
                  ->on('formations')
                  ->onDelete('cascade');
        });
    }

    public function down(): void
    {
        Schema::table('paiements', function (Blueprint $table) {
            $table->dropForeign(['id_formation']);
            $table->dropColumn('id_formation');
        });
    }
};