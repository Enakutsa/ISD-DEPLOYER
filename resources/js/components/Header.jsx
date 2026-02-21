import React, { useState, useEffect, useRef, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
import CountrySelector from "./CountrySelector";
import LanguageSelector from "./LanguageSelector";
import "../styles/header.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Header() {
  const { t } = useTranslation();

  const [country, setCountry] = useState("TG");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "fr");
  const [isOpen, setIsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  const accountRef = useRef();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const countryMap = {
    "1": "TG",
    "2": "BJ",
    "3": "BF",
    "4": "CI",
    "5": "NE",
    "6": "OT",
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUserName(null);
    setCountry("TG");
    navigate("/");
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    const updateUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const u = JSON.parse(storedUser);
        setUserName(`${u.nom || ""} ${u.prenom || ""}`.trim() || u.name);
        setCountry(countryMap[u.id_pays] || "TG");
        setLang(u.langue || lang);
      }
    };
    updateUser();
  }, []);

  useEffect(() => {
    const close = (e) => {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="ISD AFRIK Logo" className="logo-img" />
      </div>

      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars"></i>
      </button>

      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <Link to="/" className="nav-link">
          <i className="fas fa-home nav-icon"></i> {t("nav.home")}
        </Link>
        <Link to="/ingenierie" className="nav-link">
          <i className="fas fa-cogs nav-icon"></i> {t("nav.engineering")}
        </Link>
        <Link to="/solutions" className="nav-link">
          <i className="fas fa-lightbulb nav-icon"></i> {t("nav.solutions")}
        </Link>
        <Link to="/formations" className="nav-link">
          <i className="fas fa-graduation-cap nav-icon"></i> {t("nav.trainings")}
        </Link>
        <Link to="/produits" className="nav-link">
          <i className="fas fa-box-open nav-icon"></i> {t("nav.products")}
        </Link>
        <Link to="/projets" className="nav-link">
          <i className="fas fa-project-diagram nav-icon"></i> {t("nav.projects")}
        </Link>
        <Link to="/actualites" className="nav-link">
          <i className="fas fa-newspaper nav-icon"></i> {t("nav.news")}
        </Link>
        <Link to="/contact" className="nav-link">
          <i className="fas fa-envelope nav-icon"></i> {t("nav.contact")}
        </Link>

        {!token ? (
          <>
            <Link to="/register" className="nav-link">
              <i className="fas fa-user-plus nav-icon"></i> {t("auth.register")}
            </Link>
            <Link to="/login" className="nav-link">
              <i className="fas fa-sign-in-alt nav-icon"></i> {t("auth.login")}
            </Link>
          </>
        ) : (
          <div className="account" ref={accountRef}>
            <div
              className="account-btn"
              onClick={(e) => {
                e.stopPropagation();
                setAccountOpen(!accountOpen);
              }}
            >
              <i className="fas fa-user-circle"></i>
              <span>{userName || t("auth.account")}</span>
              <i className={`fas fa-chevron-${accountOpen ? "up" : "down"}`}></i>
            </div>

            {accountOpen && (
              <ul className="account-menu">
                <li onClick={() => navigate("/profile")}>
                  <i className="fas fa-id-card"></i> {t("auth.profile")}
                </li>
                <li onClick={() => navigate("/mes-commandes")}>
                  <i className="fas fa-box"></i> {t("auth.orders")}
                </li>
                <li onClick={() => navigate("/mes-produits")}>
                  <i className="fas fa-flask"></i> {t("auth.myProducts")}
                </li>
                <li onClick={() => navigate("/mes-formations")}>
                  <i className="fas fa-chalkboard-teacher"></i> {t("auth.myTrainings")}
                </li>
                <li onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i> {t("auth.logout")}
                </li>
              </ul>
            )}
          </div>
        )}
      </nav>

      <div className="selectors">
        <CountrySelector value={country} onChange={setCountry} />
        <LanguageSelector value={lang} onChange={setLang} />
      </div>
    </header>
  );
}

export default memo(Header);