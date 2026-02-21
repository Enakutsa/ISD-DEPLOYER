import React, { useState } from "react";

export default function Settings() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    // Ici tu feras un appel API vers /api/admin/settings
    setMessage("Paramètres sauvegardés avec succès !");
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
      <h1 className="text-2xl font-bold mb-6 text-blue-900">Paramètres</h1>
      <form onSubmit={handleSave} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Nom</label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nom complet"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Adresse email"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2">Mot de passe</label>
          <input
            type="password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Nouveau mot de passe"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-blue-900 transition"
        >
          Sauvegarder
        </button>
      </form>

      {message && (
        <p className="mt-4 text-center text-green-600 font-medium">{message}</p>
      )}
    </div>
  );
}