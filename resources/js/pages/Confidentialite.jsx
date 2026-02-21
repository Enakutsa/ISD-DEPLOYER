import React from "react";
import "../styles/confidentialite.css";

export default function Confidentialite() {
  return (
    <div className="legal-page confidentialite-page">
      <section className="legal-hero">
        <h1>Politique de confidentialité</h1>
      </section>

      <div className="legal-container">
        <section>
          <h2>Données collectées</h2>
          <p>Expliquer quelles données sont collectées (formulaires, cookies, etc.).</p>
        </section>

        <section>
          <h2>Utilisation des données</h2>
          <p>Expliquer pourquoi elles sont utilisées (réponse aux demandes, statistiques, etc.).</p>
        </section>

        <section>
          <h2>Droits des utilisateurs</h2>
          <p>Accès, rectification, suppression, contact pour exercer ces droits.</p>
        </section>
      </div>
    </div>
  );
}
