// // import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AdminDashboard() {
//   const [stats, setStats] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     console.log("🔄 AdminDashboard monté");

//     const token = localStorage.getItem("adminToken");
//     console.log("📦 Token récupéré :", token);

//     if (!token) {
//       setError("Veuillez vous reconnecter");
//       return;
//     }

//     axios
//       .get("http://localhost:8000/api/admin/dashboard", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           Accept: "application/json",
//         },
//       })
//       .then((res) => {
//         console.log("✅ Réponse API reçue :", res.data);
//         setStats(res.data);
//       })
//       .catch((err) => {
//         console.error("❌ Erreur API :", err);
//         if (err.response) {
//           if (err.response.status === 401) {
//             setError("Non authentifié. Veuillez vous reconnecter.");
//           } else if (err.response.status === 403) {
//             setError("Accès réservé aux administrateurs.");
//           } else {
//             setError(err.response.data.message || "Erreur API");
//           }
//         } else {
//           setError("Impossible de contacter le serveur");
//         }
//       });
//   }, []);

//   if (error) return <p className="text-red-600">{error}</p>;
//   if (!stats) return <p>Chargement...</p>;

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//       {[
//         { label: "Utilisateurs", value: stats.utilisateurs_total },
//         { label: "Clients", value: stats.clients_total },
//         { label: "Admins", value: stats.admins_total },
//         { label: "Super Admins", value: stats.super_admins_total },
//         { label: "Commandes", value: stats.commandes_total },
//         { label: "Formations", value: stats.formations_total },
//       ].map((item, index) => (
//         <div key={index} className="bg-white shadow rounded p-4">
//           <h2 className="text-lg font-bold">{item.label}</h2>
//           <p>{item.value}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AdminDashboard;