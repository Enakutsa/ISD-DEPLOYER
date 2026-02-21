import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout et pages admin
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Users from "./pages/admin/Users";
import Logs from "./pages/admin/Logs";
import AdminVerify from "./pages/admin/AdminVerify"; // ✅ page verify
import AdminLogin from "./pages/admin/AdminLogin";   // ✅ page login
import Settings from "./pages/admin/Settings";       // ✅ page paramètres

function PanelApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route login hors layout */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/verify" element={<AdminVerify />} /> {/* ✅ nouvelle route */}



        {/* Layout global admin */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Pages incluses dans le layout */}
          <Route path="dashboard" element={<AdminDashboard />} />
          
          <Route path="users" element={<Users />} />
          <Route path="logs" element={<Logs />} />
          <Route path="settings" element={<Settings />} />
          {/* Page par défaut */}
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PanelApp;

// Point d’entrée
ReactDOM.createRoot(document.getElementById("panel")).render(
  <React.StrictMode>
    <PanelApp />
  </React.StrictMode>
);