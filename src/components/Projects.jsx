// import React from "react";

// export default function Projects() {
//   return (
//     <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-900">
//       <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>
      
//       <div className="max-w-xl mx-auto">
//         <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500/50 transition">
//           <h4 className="text-xl font-bold mb-2 text-blue-400">MERN Stack</h4>
//           <p className="text-gray-400 mb-4">
//             Full-stack responsive Website built with React, Node.js, Express, and MongoDB.
//           </p>
//           <span className="text-sm text-blue-400/80 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900">
//             React • Node • MongoDB
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-900">
      <h3 className="text-3xl font-bold text-center mb-10 text-white">Projects</h3>
      
      {/* સેન્ટર અને ફ્યુચર ઓટો-એડજસ્ટ માટેનું ગ્રીડ લેઆઉટ */}
      <div className="max-w-xl mx-auto">
        <div className="p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-green-500/50 transition shadow-xl">
          
          {/* Project Title */}
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-2xl font-extrabold text-green-400">EVdriveX - Electric Vehicle Portal</h4>
            <span className="text-xs font-bold uppercase tracking-wider bg-green-500/10 text-green-400 px-3 py-1 rounded-full border border-green-500/20">
              Full Stack
            </span>
          </div>

          {/* Project Description */}
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            A centralized digital platform designed to accelerate sustainable transportation by connecting EV users, manufacturers, and service providers. Features real-time charging station locators, EV model comparisons, digital slot bookings, secure payments, and a robust multi-role admin & owner panel.
          </p>

          {/* Key Modules */}
          <div className="mb-6 bg-gray-950/60 p-4 rounded-xl border border-gray-800/80">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Core Modules:</p>
            <div className="grid grid-cols-3 gap-2 text-xs text-gray-300 font-medium text-center">
              <span className="bg-gray-900 py-1.5 px-2 rounded-lg border border-gray-800">👑 Admin Panel</span>
              <span className="bg-gray-900 py-1.5 px-2 rounded-lg border border-gray-800">👤 User Portal</span>
              <span className="bg-gray-900 py-1.5 px-2 rounded-lg border border-gray-800">🚗 Vehicle Owner</span>
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800/60">
            <span className="text-xs text-green-400 bg-green-950/40 px-3 py-1 rounded-md border border-green-900/50 font-medium">React</span>
            <span className="text-xs text-green-400 bg-green-950/40 px-3 py-1 rounded-md border border-green-900/50 font-medium">Node.js</span>
            <span className="text-xs text-green-400 bg-green-950/40 px-3 py-1 rounded-md border border-green-900/50 font-medium">Express</span>
            <span className="text-xs text-green-400 bg-green-950/40 px-3 py-1 rounded-md border border-green-900/50 font-medium">MongoDB</span>
            <span className="text-xs text-green-400 bg-green-950/40 px-3 py-1 rounded-md border border-green-900/50 font-medium">Tailwind CSS</span>
          </div>

        </div>
      </div>
    </section>
  );
}