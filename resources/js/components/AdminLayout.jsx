// src/components/AdminLayout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">ISD AFRIK Admin</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/admin/dashboard" className="hover:text-yellow-400">
                📊 Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/users" className="hover:text-yellow-400">
                👥 Utilisateurs
              </Link>
            </li>
            <li>
              <Link to="/admin/orders" className="hover:text-yellow-400">
                📦 Commandes
              </Link>
            </li>
            <li>
              <Link to="/admin/formations" className="hover:text-yellow-400">
                🎓 Formations
              </Link>
            </li>
            <li>
              <Link to="/admin/settings" className="hover:text-yellow-400">
                ⚙️ Paramètres
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-blue-900">Tableau de bord</h1>
          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              window.location.href = "/admin/login";
            }}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            🚪 Déconnexion
          </button>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}