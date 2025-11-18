// src/components/Header.jsx
// Polished dashboard header — COPY EXACTLY AS-IS.

import React from "react";

export default function Header() {
  return (
    <header className="hidden md:flex items-center justify-between bg-[#0f172a] text-white px-6 py-4 shadow-lg border-b border-white/10">
      
      {/* Left — Page Title */}
      <h2 className="text-2xl font-semibold tracking-wide">Dashboard</h2>

      {/* Center — Search Bar */}
      <div className="relative w-80">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg bg-[#1e293b] text-white placeholder-gray-400 border border-white/10 focus:border-blue-500 outline-none transition"
        />
        <svg
          className="absolute right-3 top-2.5 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M11 4a7 7 0 015.3 11.7l4 4-1.4 1.4-4-4A7 7 0 1111 4z" />
        </svg>
      </div>

      {/* Right — Avatar + Last Updated */}
      <div className="flex items-center gap-6">
        
        <div className="text-sm text-gray-300">
          Last Updated: <span className="text-blue-400">{new Date().toLocaleTimeString()}</span>
        </div>

        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-lg font-bold">
          A
        </div>
      </div>
    </header>
  );
}
