import React from "react";

export default function Resume() {
  return (
    <section id="resume" className="max-w-5xl mx-auto px-6 py-16 border-t border-gray-900 text-center">
      <h3 className="text-3xl font-bold mb-4">My Resume</h3>
      <p className="text-gray-400 max-w-lg mx-auto mb-8 text-sm">
        Want to review my academic records, technical skills, and work experience in detail? You can view or download my resume below.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {/* View Resume Button */}
        <a
          href="/DharmikJotaniyaCV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition shadow-lg shadow-blue-600/30 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>View Resume</span>
        </a>

        {/* Download Resume Button */}
        <a
          href="/DharmikJotaniyaCV.pdf"
          download="Dharmik_Jotaniya_Resume.pdf"
          className="px-6 py-3 bg-gray-900 border border-gray-800 hover:border-blue-500 text-gray-200 font-semibold rounded-xl transition flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <span>Download CV</span>
        </a>
      </div>
    </section>
  );
}