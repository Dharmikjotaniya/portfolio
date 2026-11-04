import React from "react";

export default function Certificates() {
  const certs = [
    {
      title: "Course on Computer Concepts (CCC)",
      issuer: "Unique Computer Education",
      grade: "Grade A+",
      date: "May 2023 - Aug 2023",
      desc: "Comprehensive certification covering computer fundamentals, operating systems, and office productivity tools.",
      viewUrl: "/CCC_Certificate.jpeg"
    },
    {
      title: "C & C++ Programming",
      issuer: "Technical Certification",
      grade: "Certified",
      date: "Completed",
      desc: "Strong foundation in procedural programming, logic building, pointers, and object-oriented concepts.",
      viewUrl: "/C_C++_Certificate.jpeg"
    },
    {
      title: "Full-Stack Web Development (MERN Stack)",
      issuer: "Software Development Training",
      grade: "Certified",
      date: "1-Year Internship",
      desc: "Comprehensive hands-on training and development experience building modern, responsive web apps using MongoDB, Express.js, React, and Node.js.",
      viewUrl: "/Full_Stack_Certificate.jpeg"
    },
    {
      title: "Data Analysis & Power BI",
      issuer: "Data Analytics Training",
      grade: "Certified",
      date: "120-Hours Course",
      desc: "Extensive training in data visualization, business intelligence dashboards creation, SQL queries, and interactive reporting using Power BI.",
      viewUrl: "/PowerBI_Certificate.jpeg" // Ahiya " puru karvu jaruri htu
    }
  ];

  const handleView = (url) => {
    if (url === "#" || !url) {
      alert("Certificate preview will be available soon.");
    } else {
      window.open(url, "_blank");
    }
  };

  return (
    <section id="certificates" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-900">
      <h3 className="text-3xl font-bold text-center mb-4 text-white">Certificates & Achievements</h3>
      <p className="text-gray-400 text-center text-sm mb-10 max-w-lg mx-auto">
        Verified credentials and technical training completions. (Protected)
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certs.map((cert, index) => (
          <div 
            key={index} 
            onContextMenu={(e) => e.preventDefault()} 
            className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition shadow-xl flex flex-col justify-between relative overflow-hidden select-none"
          >

            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-xl font-bold text-blue-400">{cert.title}</h4>
                {cert.grade && (
                  <span className="text-xs font-bold bg-blue-500/10 text-blue-400 px-2.5 py-1 rounded-full border border-blue-500/20 shrink-0 ml-2">
                    {cert.grade}
                  </span>
                )}
              </div>
              
              <p className="text-xs font-semibold text-gray-400 mb-3">
                {cert.issuer} • {cert.date}
              </p>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6">{cert.desc}</p>
            </div>

            {/* View Button */}
            <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
              <span className="text-[10px] text-gray-500 italic">View Only</span>
              <button 
                onClick={() => handleView(cert.viewUrl)}
                className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs font-semibold rounded-lg border border-blue-500/30 transition flex items-center space-x-2 cursor-pointer"
              >
                <span>👁️ View Certificate</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}