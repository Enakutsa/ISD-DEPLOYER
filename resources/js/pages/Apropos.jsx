import React from "react";
import "../styles/apropos.css";

export default function Apropos() {
  return (
    <div className="apropos-page">
      <h1>À propos de ISD AFRIK</h1>
      <p className="intro">
        Le Groupe ISD AFRIK est dédié à l’innovation, la formation et les solutions digitales
        pour accompagner la transformation des entreprises et des particuliers en Afrique.
      </p>

      <div className="apropos-grid">
        <div className="apropos-card">
          <h2>Notre mission</h2>
          <p>
            Offrir des solutions technologiques adaptées aux besoins locaux et internationaux.
          </p>
        </div>

        <div className="apropos-card">
          <h2>Notre vision</h2>
          <p>
            Être un acteur majeur de la transformation digitale en Afrique.
          </p>
        </div>

        <div className="apropos-card">
          <h2>Nos valeurs</h2>
          <p>
            Innovation, excellence, collaboration et impact social durable.
          </p>
        </div>
      </div>
    </div>
  );
}
