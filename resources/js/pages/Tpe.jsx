import React from "react";
import { Link } from "react-router-dom";
import "../styles/tpe.css";

export default function Tpe() {
  return (
    <div className="service-page tpe-page">
      <section className="service-hero">
        <div className="service-hero-content">
          <h1>Fourniture de TPE</h1>
          <p>Des terminaux de paiement fiables et sécurisés pour vos transactions</p>
        </div>
      </section>

      <div className="service-container">
        <section className="service-intro">
          <h2>Notre Expertise</h2>
          <p>
            Nous proposons des solutions de paiement électronique adaptées aux commerçants et entreprises,
            avec installation, formation et support technique.
          </p>
        </section>

        <section className="service-solutions">
          <h2>Nos Solutions</h2>
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon"><i className="fas fa-credit-card"></i></div>
              <h3>Terminaux Fixes</h3>
              <p>Idéal pour les commerces sédentaires.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon"><i className="fas fa-mobile-alt"></i></div>
              <h3>Terminaux Mobiles</h3>
              <p>Flexibilité pour les commerçants itinérants.</p>
            </div>
            <div className="solution-card">
              <div className="solution-icon"><i className="fas fa-headset"></i></div>
              <h3>Support Technique</h3>
              <p>Assistance continue pour garantir la fiabilité.</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Facilitez vos paiements</h2>
          <p>Contactez-nous pour équiper votre entreprise.</p>
          <Link to="/contact" className="cta-button">
            <i className="fas fa-envelope"></i> Nous contacter
          </Link>
        </section>
      </div>
    </div>
  );
}
