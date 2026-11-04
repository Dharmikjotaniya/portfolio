import React from "react";

export default function Skills() {
  const skills = [
    "React.js", 
    "Node.js", 
    "Express.js", 
    "MongoDB", 
    "Tailwind CSS", 
    "JavaScript (ES6+)", 
    "C / C++", 
    "SQL", 
    "Power BI", 
    "Git & GitHub"
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-900">
      <h3 className="text-3xl font-bold text-center mb-4 text-white">Technical Skills</h3>
      <p className="text-gray-400 text-center text-sm mb-10 max-w-lg mx-auto">
        Core technologies and tools I use to build scalable web applications and data dashboards.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-5 py-2.5 bg-gray-900 border border-gray-800 rounded-full text-gray-200 hover:border-blue-400 hover:text-blue-400 transition shadow-sm font-medium text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}