import React from "react";
import "../styles/cgv.css";

export default function Cgv() {
  return (
    <div className="legal-page cgv-page">
      <section className="legal-hero">
        <h1>Conditions Générales de Vente</h1>
      </section>

      <div className="legal-container">
        <section>
          <h2>Produits et services</h2>
          <p>Description des produits ou services proposés.</p>
        </section>

        <section>
          <h2>Prix et modalités de paiement</h2>
          <p>Indiquer les prix, moyens de paiement acceptés, délais.</p>
        </section>

        <section>
          <h2>Livraison et exécution</h2>
          <p>Conditions de livraison ou d’exécution du service.</p>
        </section>

        <section>
          <h2>Droit de rétractation</h2>
          <p>Expliquer les conditions légales (souvent 14 jours).</p>
        </section>

        <section>
          <h2>Garanties et responsabilités</h2>
          <p>Préciser les garanties légales et limites de responsabilité.</p>
        </section>
      </div>
    </div>
  );
}
