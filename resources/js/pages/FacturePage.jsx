import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../styles/facture.css";

function FacturePage() {
  const { id } = useParams();
  const [paiement, setPaiement] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(`http://localhost:8000/api/paiement/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setPaiement(res.data.paiement))
      .catch(() => setError("Impossible de récupérer les informations du paiement."));
  }, [id]);

  // ✅ Calcul TVA corrigé : montant = HT, on AJOUTE 18%
  const calculerMontants = () => {
    if (!paiement) return { ht: 0, tva: 0, ttc: 0 };
    const ht = parseFloat(paiement.montant);      // Le prix de la formation est HT
    const tva = ht * 0.18;                         // On AJOUTE 18% de TVA
    const ttc = ht + tva;                          // TTC = HT + TVA
    return { ht, tva, ttc };
  };

  const generatePDF = () => {
    if (!paiement) return;

    const doc = new jsPDF();
    const montants = calculerMontants();
    
    // ✅ Date source unique pour synchronisation parfaite
    const dateObj = new Date(paiement.date_paiement);
    const dateEmission = dateObj.toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const datePaiementComplete = dateObj.toLocaleString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Logo
    try {
      const img = new Image();
      img.src = "/images/logo.png";
      doc.addImage(img, "PNG", 14, 10, 30, 30);
    } catch (e) {
      console.log("Logo non disponible");
    }

    // Titre
    doc.setFontSize(18);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(23, 34, 67);
    doc.text("FACTURE", 105, 20, { align: "center" });

    // Infos facture
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text(`Numéro facture : FAC-${paiement.id_paiement}`, 14, 50);
    doc.text(`Date d'émission : ${dateEmission}`, 14, 58);
    doc.text(`Référence : ${paiement.reference_transaction}`, 14, 66);
    doc.text(`Statut : ${paiement.statut_paiement}`, 14, 74);

    // Émetteur
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("ÉMETTEUR", 14, 90);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.text("ISD GROUP AFRIK", 14, 98);
    doc.text("info@groupeisdafrik.com", 14, 106);
    doc.text("Lomé, Togo", 14, 114);

    // Destinataire
    doc.setFontSize(11);
    doc.setFont("helvetica", "bold");
    doc.text("DESTINATAIRE", 120, 90);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    if (paiement.utilisateur) {
      doc.text(
        `${paiement.utilisateur.nom} ${paiement.utilisateur.prenom}`,
        120,
        98
      );
      doc.text(paiement.utilisateur.email, 120, 106);
      if (paiement.utilisateur.telephone) {
        doc.text(`Tél: ${paiement.utilisateur.telephone}`, 120, 114);
      }
    }

    // Tableau
    autoTable(doc, {
      startY: 130,
      head: [["Description", "Prix Unit. HT", "Qté", "Total HT"]],
      body: [
        [
          paiement.formation?.titre || "Formation",
          `${montants.ht.toFixed(0)} FCFA`,
          "1",
          `${montants.ht.toFixed(0)} FCFA`,
        ],
      ],
      headStyles: {
        fillColor: [23, 34, 67],
        textColor: [255, 255, 255],
        fontSize: 10,
        fontStyle: "bold",
      },
      styles: { fontSize: 9, cellPadding: 5 },
    });

    // Totaux
    const y = doc.lastAutoTable.finalY + 15;
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(`Total HT :`, 140, y);
    doc.text(`${montants.ht.toFixed(0)} FCFA`, 185, y, { align: "right" });

    doc.text(`TVA (18%) :`, 140, y + 8);
    doc.text(`${montants.tva.toFixed(0)} FCFA`, 185, y + 8, { align: "right" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(`TOTAL TTC :`, 140, y + 18);
    doc.text(`${montants.ttc.toFixed(0)} FCFA`, 185, y + 18, { align: "right" });

    // Infos paiement
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(`Paiement effectué via ${paiement.moyen_paiement}`, 14, y + 35);
    doc.text(`Le ${datePaiementComplete}`, 14, y + 42);

    // Message
    doc.setFont("helvetica", "italic");
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.text("Merci pour votre confiance 🙏", 105, y + 58, { align: "center" });

    // Pied de page
    const footerY = doc.internal.pageSize.height - 20;
    doc.setFontSize(8);
    doc.setTextColor(100, 100, 100);
    doc.text("ISD GROUP AFRIK - Lomé, Togo", 105, footerY, { align: "center" });

    doc.save(`Facture-FAC-${paiement.id_paiement}.pdf`);
  };

  if (error) return <p className="facture-error">{error}</p>;
  if (!paiement) return <p className="facture-loading">Chargement de la facture...</p>;

  const montants = calculerMontants();
  
  // ✅ Date source unique
  const dateObj = new Date(paiement.date_paiement);
  const dateEmission = dateObj.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const datePaiementComplete = dateObj.toLocaleString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="facture-wrapper">
      <div className="facture-container">

        <div className="facture-header">
          <img src="/images/logo.png" alt="Logo ISD" className="facture-logo" />
          <h1 className="facture-title">Facture</h1>
        </div>

        {/* Informations facture */}
        <div className="facture-info">
          <div className="facture-info-block">
            <h3>📋 Informations Facture</h3>
            <p><strong>Numéro :</strong> FAC-{paiement.id_paiement}</p>
            <p><strong>Date d'émission :</strong> {dateEmission}</p>
            <p><strong>Référence :</strong> {paiement.reference_transaction}</p>
            <p>
              <strong>Statut :</strong>{" "}
              <span className={`badge ${paiement.statut_paiement === "réussi" ? "badge-success" : "badge-pending"}`}>
                {paiement.statut_paiement}
              </span>
            </p>
          </div>

          <div className="facture-info-block">
            <h3>🏢 Émetteur</h3>
            <p><strong>ISD GROUP AFRIK</strong></p>
            <p>info@groupeisdafrik.com</p>
            <p>Lomé, Togo</p>
          </div>
        </div>

        {/* Destinataire */}
        <div className="facture-info">
          <div className="facture-info-block">
            <h3>👤 Destinataire</h3>
            {paiement.utilisateur ? (
              <>
                <p><strong>{paiement.utilisateur.nom} {paiement.utilisateur.prenom}</strong></p>
                <p>{paiement.utilisateur.email}</p>
                {paiement.utilisateur.telephone && (
                  <p>Tél: {paiement.utilisateur.telephone}</p>
                )}
              </>
            ) : (
              <p>Informations client non disponibles</p>
            )}
          </div>
        </div>

        {/* Tableau */}
        <table className="facture-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Prix Unit. HT</th>
              <th>Qté</th>
              <th>Total HT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>{paiement.formation?.titre || "Formation"}</strong>
                <br />
                <small>Formation professionnelle</small>
              </td>
              <td>{montants.ht.toFixed(0)} FCFA</td>
              <td className="text-center">1</td>
              <td><strong>{montants.ht.toFixed(0)} FCFA</strong></td>
            </tr>
          </tbody>
        </table>

        {/* Totaux - ✅ TVA ajoutée, pas retirée */}
        <div className="facture-totaux">
          <div className="totaux-row">
            <span>Total HT</span>
            <span>{montants.ht.toFixed(0)} FCFA</span>
          </div>
          <div className="totaux-row">
            <span>TVA (18%) <small>ajoutée</small></span>
            <span>+ {montants.tva.toFixed(0)} FCFA</span>
          </div>
          <div className="totaux-row totaux-final">
            <span><strong>TOTAL TTC</strong></span>
            <span><strong>{montants.ttc.toFixed(0)} FCFA</strong></span>
          </div>
        </div>

        {/* Infos paiement */}
        <div className="payment-info-box">
          <p>💳 <strong>Paiement effectué via {paiement.moyen_paiement}</strong></p>
          <p>📅 Le {datePaiementComplete}</p>
        </div>

        <p className="facture-thanks">Merci pour votre confiance </p>

        <button onClick={generatePDF} className="facture-button">
          📥 Télécharger en PDF
        </button>
      </div>
    </div>
  );
}

export default FacturePage;