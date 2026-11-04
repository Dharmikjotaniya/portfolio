import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-900">
      <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2">
        
        {/* Left Side: Purple Background with Info & Links */}
        <div className="bg-[#2e236f] p-8 md:p-12 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
              Let's talk about your project
            </h3>
            <p className="text-indigo-200 mb-8 leading-relaxed text-sm">
              Fill out the form and I'll get back to you within 24 hours. Let's create something amazing together.
            </p>

            {/* Contact Details with Icons */}
            <div className="space-y-6">
              
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900/80 flex items-center justify-center shrink-0 text-indigo-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-indigo-300 uppercase font-semibold">Email</p>
                  <a href="mailto:dhramikjotaniya@gmail.com" className="text-sm font-medium hover:underline">
                    dhramikjotaniya@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900/80 flex items-center justify-center shrink-0 text-indigo-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-indigo-300 uppercase font-semibold">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/dharmik-jotaniya-1aaa1328a/" target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline">
                    Connect with me
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-indigo-900/80 flex items-center justify-center shrink-0 text-indigo-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-indigo-300 uppercase font-semibold">GitHub</p>
                  <a href="https://github.com/Dharmikjotaniya" target="_blank" rel="noreferrer" className="text-sm font-medium hover:underline">
                    Explore my code
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Available For Box */}
          <div className="mt-12 bg-[#231a59] p-6 rounded-2xl border border-indigo-900/50">
            <p className="text-xs uppercase tracking-wider text-indigo-300 font-bold mb-3">Available For:</p>
            <ul className="space-y-2 text-sm text-indigo-100">
              <li>✓ Freelance Projects</li>
              <li>✓ Web Development</li>
              <li>✓ Collaboration & Internships</li>
            </ul>
          </div>
        </div>

        {/* Right Side: White Background Form */}
        <div className="p-8 md:p-12 bg-white flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
          
          {/* Formspree Action Link Added Here */}
          <form 
            action="https://formspree.io/f/xkjjyjqz" 
            method="POST" 
            className="space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Contact Number</label>
                <input
                  type="number"
                  name="contactNumber"
                  placeholder="9876543210"
                  maxLength="10"
                  className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Your Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="How can I help you?"
                className="w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3 text-gray-900 text-sm focus:outline-none focus:border-indigo-600 focus:bg-white transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Send Message</span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}