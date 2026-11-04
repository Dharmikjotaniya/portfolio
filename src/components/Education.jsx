import React from "react";

export default function Education() {
  const educationData = [
    {
      std: "Std 1",
      school: "Dudhi Ba Vidyalaya",
      location: "Surat",
      desc: "Early schooling and foundational education."
    },
    {
      std: "Std 2, 3 & 4",
      school: "Hansmukti Vidyalaya",
      location: "Surat",
      desc: "Primary education and skill development."
    },
    {
      std: "Std 5, 6",
      school: "Shree Saurashtra Gyan Pith Vidyalaya (Hostel)",
      location: "Hostel / Gujarat",
      desc: "Residential schooling experience and independent learning."
    },
    {
      std: "Std 6, 7, 8, 9 & 10",
      school: "Hansmukti Vidyalaya",
      location: "Surat",
      desc: "Completed secondary education with strong academics."
    },
    {
      std: "Std 11 & 12",
      school: "Gayatri Vidya Vihar",
      location: "Ahmedabad",
      desc: "Higher secondary education."
    },
    {
      std: "Bachelor of Computer Applications (BCA)",
      school: "President Institute of Computer Application (Gujarat University)",
      location: "Ahmedabad",
      desc: "Graduated with 7.91 CGPA, specializing in full-stack development, MERN stack, and software engineering."
    }
  ];

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-900">
      <h3 className="text-3xl font-bold text-center mb-12 text-white">Education Journey</h3>

      <div className="relative border-l-2 border-blue-600/40 ml-4 md:ml-32 space-y-10">
        {educationData.map((item, index) => (
          <div key={index} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-gray-950 border-2 border-blue-500 rounded-full group-hover:bg-blue-500 transition"></div>

            {/* Content Box */}
            <div className="p-6 bg-gray-900 border border-gray-800 rounded-2xl hover:border-blue-500/50 transition shadow-xl">
              <span className="text-xs font-bold uppercase tracking-wider bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                {item.std}
              </span>
              <h4 className="text-xl font-bold text-white mt-3">{item.school}</h4>
              <p className="text-xs font-semibold text-blue-400/80 mb-2">📍 {item.location}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}