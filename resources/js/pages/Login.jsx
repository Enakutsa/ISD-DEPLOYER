import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/login.css";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    mot_de_passe: ""
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const API_BASE = "http://localhost:8000";

  useEffect(() => {
    if (location.state?.success) {
      setSuccess(location.state.success);
      setTimeout(() => setSuccess(null), 3000);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const res = await axios.post(`${API_BASE}/api/auth/login`, formData);

      console.log("Réponse login:", res.data); // ✅ debug

      // 🔐 Si 2FA est requis, rediriger vers la page OTP
      if (res.data.requires_2fa === true) {
        navigate("/verify-otp", { state: { user_id: res.data.user_id, email: res.data.email } });
        return;
      }

      // ✅ Connexion classique
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);

        const profil = await axios.get(`${API_BASE}/api/auth/profile`, {
          headers: {
            Authorization: `Bearer ${res.data.token}`,
          },
        });

        const user = profil.data.user ? profil.data.user : profil.data;

        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
          if (user.id_pays) {
            localStorage.setItem("pays", user.id_pays);
          }
          window.dispatchEvent(new Event("userUpdated"));
        }

        setSuccess("Connexion réussie ✅");
        setTimeout(() => navigate("/"), 1000);
      }
    } catch (err) {
      console.error("Erreur Axios:", err);
      if (err.response && err.response.data) {
        setError(
          err.response.data.errors ||
          err.response.data.message ||
          "Erreur serveur"
        );
      } else {
        setError("Erreur réseau");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">Connexion</h1>

        {success && <div className="success-msg">✅ {success}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <i className="fas fa-envelope icon"></i>
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>

          <div className="input-group">
            <i className="fas fa-lock icon"></i>
            <input
              type={showPassword ? "text" : "password"}
              name="mot_de_passe"
              placeholder="Mot de passe"
              value={formData.mot_de_passe}
              onChange={handleChange}
              className="input"
              required
            />
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} toggle-icon`}
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <button type="submit" className="submit-btn">
            <i className="fas fa-sign-in-alt"></i> Se connecter
          </button>
        </form>

        <div className="forgot-password">
          <a href="/forgot-password" className="forgot-link">
            <i className="fas fa-question-circle"></i> Mot de passe oublié ?
          </a>
        </div>

        {error && (
          <div className="error-msg">
            ❌ {typeof error === "object" ? JSON.stringify(error) : error}
          </div>
        )}
      </div>
    </div>
  );
}