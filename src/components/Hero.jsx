// import React from "react";

// export default function Hero() {
//   return (
//     <section id="about" className="flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden">
      
//       {/* Optional: Chhoti glowing background effect mate */}
//       <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

//       {/* Status Badge */}
//       <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
//         <span className="w-2 h-2 rounded-full bg-blue-400"></span>
//         Available for Full-Stack Roles
//       </div>

//       <p className="text-blue-400 font-medium tracking-wide uppercase mb-2">
//         Full-Stack Developer & Data Analyst
//       </p>

//       <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">
//         Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Dharmik Jotaniya</span>
//       </h2>

//       <p className="text-gray-300 max-w-xl text-base md:text-lg mb-8 leading-relaxed">
//         BCA Graduate from Gujarat University (CGPA: 7.91). Experienced in building robust full-stack applications using the <span className="text-blue-400 font-medium">MERN stack</span>, with a strong foundation in data analysis and modern UI design.
//       </p>

//       {/* Action Buttons */}
//       <div className="flex flex-wrap justify-center gap-4">
//         <a
//           href="#projects"
//           className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition shadow-lg shadow-blue-600/30 flex items-center space-x-2"
//         >
//           <span>View Projects</span>
//         </a>
        
//         <a
//           href="#resume"
//           className="px-6 py-3 bg-gray-900 border border-gray-800 hover:border-blue-500 text-gray-200 rounded-xl font-semibold transition flex items-center space-x-2"
//         >
//           <span>View Resume</span>
//         </a>

//         <a
//           href="#contact"
//           className="px-6 py-3 border border-gray-800 hover:border-blue-400 hover:text-blue-400 text-gray-300 rounded-xl font-semibold transition"
//         >
//           Contact Me
//         </a>
//       </div>

//     </section>
//   );
// }

import React from "react";

export default function Hero() {
  return (
    <section id="about" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-24 md:py-32 gap-12 relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      {/* Left Side: Content */}
      <div className="flex-1 text-center md:text-left">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-blue-400"></span>
          Available for Full-Stack Roles
        </div>

        <p className="text-blue-400 font-medium tracking-wide uppercase mb-2">
          Full-Stack Developer & Data Analyst
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Dharmik Jotaniya</span>
        </h2>

        <p className="text-gray-300 max-w-xl text-base md:text-lg mb-8 leading-relaxed">
          BCA Graduate from Gujarat University (CGPA: 7.91). Experienced in building robust full-stack applications using the <span className="text-blue-400 font-medium">MERN stack</span>, with a strong foundation in data analysis and modern UI design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition shadow-lg shadow-blue-600/30 flex items-center space-x-2"
          >
            <span>View Projects</span>
          </a>
          
          <a
            href="#resume"
            className="px-6 py-3 bg-gray-900 border border-gray-800 hover:border-blue-500 text-gray-200 rounded-xl font-semibold transition flex items-center space-x-2"
          >
            <span>View Resume</span>
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-800 hover:border-blue-400 hover:text-blue-400 text-gray-300 rounded-xl font-semibold transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side: Profile Image (Fix Image Stretch) */}
      <div className="flex-shrink-0 relative flex justify-center">
        <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/10 bg-gray-900 group">
          
          {/* Background Gradient Ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent pointer-events-none z-10"></div>

          {/* Image Tag */}
          <img 
            src="/Photo.jpeg" 
            alt="Dharmik Jotaniya" 
            className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
          />
        </div>
      </div>

    </section>
  );
}