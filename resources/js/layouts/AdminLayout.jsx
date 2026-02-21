import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">ISD AFRIK Admin</h2>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block hover:text-yellow-400">Dashboard</Link>
          <Link to="/admin/users" className="block hover:text-yellow-400">Utilisateurs</Link>
          <Link to="/admin/logs" className="block hover:text-yellow-400">Logs</Link>
          <Link to="/admin/settings" className="block hover:text-yellow-400">Paramètres</Link>
        </nav>
      </aside>

      {/* Zone principale */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}