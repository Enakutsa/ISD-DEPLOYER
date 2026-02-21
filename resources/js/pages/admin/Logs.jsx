// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Logs() {
//   const [logs, setLogs] = useState([]);

//   useEffect(() => {
//     axios.get("/api/admin/logs").then((res) => setLogs(res.data));
//   }, []);

//   return (
//     <>
//       {/* ✅ CSS intégré */}
//       <style>{`
//         .logs-wrapper {
//           padding: 2rem;
//         }
//         .logs-title {
//           font-size: 1.6rem;
//           font-weight: bold;
//           margin-bottom: 1.5rem;
//           color: #0f1e4a;
//         }
//         .logs-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
//         .log-item {
//           background: white;
//           padding: 1rem;
//           border-radius: 8px;
//           box-shadow: 0 4px 12px rgba(0,0,0,0.1);
//           margin-bottom: 1rem;
//           transition: transform 0.2s ease, box-shadow 0.2s ease;
//         }
//         .log-item:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 6px 16px rgba(0,0,0,0.15);
//         }
//         .log-action {
//           font-size: 1rem;
//           color: #333;
//           margin-bottom: 0.5rem;
//         }
//         .log-date {
//           font-size: 0.85rem;
//           color: #666;
//         }
//       `}</style>

//       {/* ✅ HTML */}
//       <div className="logs-wrapper">
//         <h1 className="logs-title">Logs administratifs</h1>
//         <ul className="logs-list">
//           {logs.map((log) => (
//             <li key={log.id} className="log-item">
//               <p className="log-action">{log.action}</p>
//               <small className="log-date">
//                 Le {new Date(log.created_at).toLocaleString()}
//               </small>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }