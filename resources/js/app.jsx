import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Solutions from "./pages/Solutions";
import Formations from "./pages/Formations";
import Projets from "./pages/Projets";
import Actualites from "./pages/Actualites";
import Contact from "./pages/Contact";
import Ingenierie from "./pages/Ingenierie";

import Apropos from "./pages/Apropos";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import OtpVerification from "./pages/OtpVerification";
import Expertise from "./pages/Expertise";
import Presence from "./pages/Presence";
import Fiabilite from "./pages/Fiablite";
import Services from "./pages/Services";
import Etudiant from './pages/Etudiant';
import Particulier from './pages/Particulier';
import Entreprise from './pages/Entreprise';
import FormationRegister from "./pages/FormationRegister";
import FormationDetails from "./pages/FormationDetails"; // ✅ AJOUTE CE COMPOSANT
import MesFormations from "./pages/MesFormations"; 
import MesProduits from "./pages/MesProduits"; 


import Produit from "./pages/Produit";
import ProduitDetail from "./pages/ProduitDetail";
import ProduitRecherche from "./pages/ProduitRecherche";


import MesCommandes from "./pages/MesCommandes";
import ComptabiliteImmobilisations from "./pages/ComptabiliteImmobilisations"; 
import GestionCommercialeStock from "./pages/GestionCommercialeStock";
import MicrosoftAvance from "./pages/MicrosoftAvance"; 
import VideoSurveillance from "./pages/VideoSurveillance";
import PaymentPage from "./pages/PaymentPage"; // la page qu’on vient de créer
import FacturePage from "./pages/FacturePage"; // Importation de la page Facture
import Developpement from "./pages/DeveloppementApplications";
import Communication from "./pages/communication"; 
import Tpe from "./pages/Tpe"; 
import Drones from "./pages/Drones"; 
import Btp from "./pages/Btp";

// Pages légales 
import MentionsLegales from "./pages/MentionsLegales"; 
import Confidentialite from "./pages/Confidentialite"; 
import Cgv from "./pages/Cgv";

import ScrollToTop from "./components/ScrollToTop";

import "../css/app.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./i18n";

function App() {
    return (
        <BrowserRouter>
            <MainLayout>
                  {/* Ce composant force le scroll en haut à chaque navigation */}
                  <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/client/dashboard" element={<Dashboard />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/formations" element={<Formations />} />
                    <Route path="/projets" element={<Projets />} />
                    <Route path="/actualites" element={<Actualites />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/verify-otp" element={<OtpVerification />} />
                    <Route path="/expertise" element={<Expertise />} /> 
                    <Route path="/ingenierie" element={<Ingenierie />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/profile/edit" element={<EditProfile />} />
                    <Route path="/profile/password" element={<ChangePassword />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/reset-password/:token" element={<ResetPassword />} />
                    <Route path="/presence" element={<Presence />} />
                    <Route path="/fiabilite" element={<Fiabilite />} />
                    <Route path="/services" element={<Services />} />

                    

                    {/* ✅ ROUTES SPÉCIFIQUES DE SERVICES (en premier) */}

                    <Route path="/services/developpement" element={<Developpement />} />
                    <Route path="/services/communication" element={<Communication />} />
                    <Route path="/services/tpe" element={<Tpe />} />
                    <Route path="/services/drones" element={<Drones />} />
                    <Route path="/services/btp" element={<Btp />} />

                     {/* Pages légales */}
                    <Route path="/mentions-legales" element={<MentionsLegales />} />
                    <Route path="/politique-confidentialite" element={<Confidentialite />} />
                    <Route path="/cgv" element={<Cgv />} />

                    {/* ✅ ROUTES SPÉCIFIQUES DE FORMATIONS (en premier) */}
                    <Route path="/formations/etudiant" element={<Etudiant />} />
                    <Route path="/formations/particulier" element={<Particulier />} />
                    <Route path="/formations/entreprise" element={<Entreprise />} />
                    <Route path="/formations/comptabilite-immobilisations" element={<ComptabiliteImmobilisations />} />
                    <Route path="/formations/gestion-commerciale-stock" element={<GestionCommercialeStock />} />
                    <Route path="/formations/microsoft-avance" element={<MicrosoftAvance />} /> 
                    <Route path="/formations/video-surveillance" element={<VideoSurveillance />} />
                    
                    {/* ✅ ROUTES DYNAMIQUES (en dernier) */}
                    <Route path="/formations/:id/details" element={<FormationDetails />} />
                    <Route path="/formations/:id/register" element={<FormationRegister />} />
                    
                    {/* Routes profil */}
                    <Route path="/profile/formations" element={<MesFormations />} />
                    <Route path="/profile/produits" element={<MesProduits />} />
                    <Route path="/profile/commandes" element={<MesCommandes />} />

                     {/* Page de paiement */}
                   <Route path="/paiement/:id" element={<PaymentPage />} />

                         {/* Route pour facture */}
                         <Route path="/facture/:id" element={<FacturePage />} />

                          {/* Route pour inscription */}
                         <Route path="/formations/:id/register" element={<FormationRegister />} />

                                {/* Route pour paiement */}
                        <Route path="/formations/:id/paiement" element={<PaymentPage />} />

                                {/* Autres routes */}
                       <Route path="/facture/:id" element={<FacturePage />} />


                    {/* Routes produits */}
                    <Route path="/produits" element={<Produit />} />
                     <Route path="/produits/:id" element={<ProduitDetail />} />
                        <Route path="/produits/recherche" element={<ProduitRecherche />} />


                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}

ReactDOM.createRoot(document.getElementById("react-root")).render(<App />);