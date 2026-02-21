// import React, { useState } from "react";
// import axios from "axios";

// export default function AdminVerify() {
//   const [email, setEmail] = useState(""); // récupéré du login
//   const [code, setCode] = useState("");
//   const [message, setMessage] = useState("");

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/admin/verify", { email, code });
//       localStorage.setItem("adminToken", res.data.token);
//       setMessage("Connexion réussie !");
//       window.location.href = "/admin/dashboard"; // ✅ redirection
//     } catch (err) {
//       setMessage("Code invalide ou expiré");
//     }
//   };

//   return (
//     <>
//       {/* ✅ CSS intégré */}
//       <style>{`
//         body {
//           background-color: #f3f4f6;
//           font-family: Arial, sans-serif;
//         }
//         .verify-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 100vh;
//         }
//         .verify-card {
//           background: white;
//           padding: 2rem;
//           border-radius: 10px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//           width: 100%;
//           max-width: 400px;
//         }
//         .verify-card h1 {
//           font-size: 1.8rem;
//           font-weight: bold;
//           color: #0f1e4a;
//           text-align: center;
//           margin-bottom: 1.5rem;
//         }
//         .verify-card input {
//           width: 100%;
//           padding: 0.8rem;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           margin-bottom: 1rem;
//           font-size: 1rem;
//         }
//         .verify-card button {
//           width: 100%;
//           padding: 0.8rem;
//           border: none;
//           border-radius: 6px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }
//         .btn-verify {
//           background-color: #16a34a;
//           color: white;
//         }
//         .btn-verify:hover {
//           background-color: #15803d;
//         }
//         .message {
//           margin-top: 1rem;
//           text-align: center;
//           font-size: 0.9rem;
//           color: #2563eb;
//         }
//       `}</style>

//       {/* ✅ HTML + logique */}
//       <div className="verify-wrapper">
//         <div className="verify-card">
//           <h1>Vérification OTP</h1>

//           <form onSubmit={handleVerify}>
//             <input
//               type="text"
//               placeholder="Code reçu par email"
//               value={code}
//               onChange={(e) => setCode(e.target.value)}
//             />
//             <button type="submit" className="btn-verify">
//               Vérifier le code
//             </button>
//           </form>

//           {message && <p className="message">{message}</p>}
//         </div>
//       </div>
//     </>
//   );
// }