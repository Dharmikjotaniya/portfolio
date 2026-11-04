// import React from "react";

// export default function Experience() {
//   return (
//     <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-900">
//       <h3 className="text-3xl font-bold text-center mb-10">Work Experience</h3>
//       <div className="grid md:grid-cols-2 gap-8">
        
//         {/* Experience 1 */}
//         <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500/50 transition">
//           <h4 className="text-xl font-bold mb-1 text-blue-400">Back Office & System Support Assistant</h4>
//           <p className="text-sm text-gray-500 mb-3">Indian Spermtech Spermbank • May 2024 - April 2025</p>
//           <p className="text-gray-400 mb-4">
//             Managed administrative records, data entry, client invoicing, cash and electronic payment collections, petty cash, and ledgers.
//           </p>
//           <span className="text-sm text-blue-400/80 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900">Administrative • Data Entry • Billing</span>
//         </div>

//         {/* Experience 2 */}
//         <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl hover:border-blue-500/50 transition">
//           <h4 className="text-xl font-bold mb-1 text-blue-400">Back Office Work Placement (Internship)</h4>
//           <p className="text-sm text-gray-500 mb-3">Genexplore Diagnostics and Research Centre • April 2025 - May 2026</p>
//           <p className="text-gray-400 mb-4">
//             Completed mandatory academic internship as part of the Bachelor of Computer Applications degree, managing operational records and office support.
//           </p>
//           <span className="text-sm text-blue-400/80 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900">BCA Internship • Operations</span>
//         </div>

//       </div>
//     </section>
//   );
// }

import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-900">
      <h3 className="text-3xl font-bold text-center mb-10 text-white">Work Experience</h3>
      
      <div className="max-w-xl mx-auto">
        <div className="p-8 bg-gray-900 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition shadow-xl">
          
          {/* Role & Company */}
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xl font-bold text-blue-400">Full Stack MERN Developer</h4>
            <span className="text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
              Internship
            </span>
          </div>

          <p className="text-xs text-gray-400 mb-4 font-medium">
            Software Development Internship • 1 Year Experience
          </p>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-6 leading-relaxed">
            Focused on building responsive full-stack web applications utilizing MongoDB, Express.js, React, and Node.js. Developed dynamic user interfaces, RESTful APIs, integrated secure database operations, and successfully delivered production-ready web portals.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800/60">
            <span className="text-xs text-blue-400 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900/50 font-medium">React</span>
            <span className="text-xs text-blue-400 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900/50 font-medium">Node.js</span>
            <span className="text-xs text-blue-400 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900/50 font-medium">Express.js</span>
            <span className="text-xs text-blue-400 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900/50 font-medium">MongoDB</span>
            <span className="text-xs text-blue-400 bg-blue-950/40 px-3 py-1 rounded-md border border-blue-900/50 font-medium">Tailwind CSS</span>
          </div>

        </div>
      </div>
    </section>
  );
}