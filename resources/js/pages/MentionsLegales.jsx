import React from "react";
import "../styles/mentions.css";

export default function MentionsLegales() {
  return (
    <div className="legal-page mentions-page">
      <section className="legal-hero">
        <h1>Mentions légales</h1>
      </section>

      <div className="legal-container">
        <section>
          <h2>Éditeur du site</h2>
          <p>Nom de l’entreprise, adresse, téléphone, email, numéro RCCM/SIRET.</p>
        </section>

        <section>
          <h2>Responsable de publication</h2>
          <p>Nom et fonction du responsable.</p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>Nom de l’hébergeur, adresse et coordonnées.</p>
        </section>
      </div>
    </div>
  );
}
