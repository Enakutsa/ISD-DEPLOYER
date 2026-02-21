// import React, { useState } from "react";
// import axios from "axios";

// export default function AdminLogin() {
//   const [step, setStep] = useState(1); // 1 = login, 2 = OTP
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState(""); // champ local
//   const [code, setCode] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       // ✅ envoyer mot_de_passe comme attendu par Laravel
//       const res = await axios.post("/api/auth/login", { 
//         email, 
//         mot_de_passe: password 
//       });
//       setMessage(res.data.message || "Code envoyé par email !");
//       setStep(2);
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Erreur lors de la connexion");
//     }
//   };

//   const handleVerify = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/auth/verify", { email, code });
//       localStorage.setItem("adminToken", res.data.token);
//       setMessage("Connexion réussie !");
//       window.location.href = "/admin/dashboard";
//     } catch (err) {
//       setMessage(err.response?.data?.message || "Code invalide ou expiré");
//     }
//   };

//   return (
//     <>
//       <style>{`
//         body {
//           background-color: #f3f4f6;
//           font-family: Arial, sans-serif;
//         }
//         .login-wrapper {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           min-height: 100vh;
//         }
//         .login-card {
//           background: white;
//           padding: 2rem;
//           border-radius: 10px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//           width: 100%;
//           max-width: 400px;
//         }
//         .login-card h1 {
//           font-size: 1.8rem;
//           font-weight: bold;
//           color: #0f1e4a;
//           text-align: center;
//           margin-bottom: 1.5rem;
//         }
//         .login-card input {
//           width: 100%;
//           padding: 0.8rem;
//           border: 1px solid #ccc;
//           border-radius: 6px;
//           margin-bottom: 1rem;
//           font-size: 1rem;
//         }
//         .login-card button {
//           width: 100%;
//           padding: 0.8rem;
//           border: none;
//           border-radius: 6px;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }
//         .btn-login {
//           background-color: #0f1e4a;
//           color: white;
//         }
//         .btn-login:hover {
//           background-color: #f4b400;
//           color: #0f1e4a;
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

//       <div className="login-wrapper">
//         <div className="login-card">
//           <h1>Connexion Admin</h1>

//           {step === 1 && (
//             <form onSubmit={handleLogin}>
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Mot de passe"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button type="submit" className="btn-login">
//                 Se connecter
//               </button>
//             </form>
//           )}

//           {step === 2 && (
//             <form onSubmit={handleVerify}>
//               <input
//                 type="text"
//                 placeholder="Code reçu par email"
//                 value={code}
//                 onChange={(e) => setCode(e.target.value)}
//               />
//               <button type="submit" className="btn-verify">
//                 Vérifier le code
//               </button>
//             </form>
//           )}

//           {message && <p className="message">{message}</p>}
//         </div>
//       </div>
//     </>
//   );
// }