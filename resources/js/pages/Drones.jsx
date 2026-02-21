import React from "react";
import { Link } from "react-router-dom";
import "../styles/drones.css";

export default function Drones() {
  return (
    <div className="service-page drones-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Formation sur Drones</h1>
          <p>Apprenez à piloter et exploiter des drones professionnels</p>
        </div>
      </section>

      <div className="service-container">
        <section className="service-intro">
          <h2>Notre Expertise</h2>
          <p>
            Nous formons particuliers et entreprises à l’utilisation des drones pour divers usages.
          </p>
        </section>

        <section className="service-solutions">
          <h2>Nos Formations</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon"><i className="fas fa-helicopter"></i></div>
              <h3>Initiation</h3>
              <p>Découverte et pilotage de base.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon"><i className="fas fa-graduation-cap"></i></div>
              <h3>Formation Avancée</h3>
              <p>Techniques de vol et certification.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon"><i className="fas fa-tools"></i></div>
              <h3>Maintenance</h3>
              <p>Entretien et optimisation des drones.</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Envie de voler ?</h2>
          <p>Inscrivez-vous à nos formations drones.</p>
          <Link to="/contact" className="cta-button">
            <i className="fas fa-envelope"></i> Nous contacter
          </Link>
        </section>
      </div>
    </div>
  );
}
