// src/components/Sidebar.jsx
// Improved responsive sidebar with active link highlighting and mobile toggle.
// Copy–paste this file exactly as-is.

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const menu = [
  { to: "/", label: "Dashboard", icon: "M3 3h18v4H3V3z M3 10h6v11H3V10z M13 10h8v11h-8V10z" },
  { to: "/reports", label: "Reports", icon: "M4 4h16v2H4V4z M4 9h10v10H4V9z" },
  { to: "/analytics", label: "Analytics", icon: "M5 12h3v7H5v-7z M10 7h3v12h-3V7z M15 2h3v17h-3V2z" },
  { to: "/settings", label: "Settings", icon: "M12 8a4 4 0 100 8 4 4 0 000-8z M2 12a10 10 0 0116-7.5L18 6a8 8 0 10-2 0l-1 1.5A10 10 0 012 12z" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-lg ${
      isActive
        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
        : "text-gray-200 hover:bg-gray-800 hover:text-white"
    }`;

  return (
    <>
      {/* Desktop / large: fixed sidebar */}
      <div className="hidden md:flex md:flex-col w-64 bg-[#0b1120] text-white h-screen p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-wide">ViteDash</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {menu.map((m) => (
            <NavLink key={m.to} to={m.to} className={linkClass}>
              <svg
                className="w-5 h-5 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d={m.icon} />
              </svg>
              <span>{m.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto">
          <button
            onClick={() => {
              // simple logout UI action (clear local token if present)
              try {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                window.location.href = "/login";
              } catch (e) {
                // ignore
              }
            }}
            className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Mobile top bar with toggle */}
      <div className="md:hidden">
        <div className="flex items-center justify-between bg-[#0b1120] text-white px-4 py-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label="Toggle menu"
              className="p-2 rounded-md hover:bg-white/10 transition"
            >
              {/* hamburger / close icon */}
              {!open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              )}
            </button>
            <div className="text-xl font-bold">ViteDash</div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-sm text-white/90">User</div>
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-black font-semibold">US</div>
          </div>
        </div>

        {/* Mobile sliding menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#0b1120] text-white p-6 transform transition-transform z-40 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold">ViteDash</h2>
          </div>

          <nav className="flex flex-col gap-2">
            {menu.map((m) => (
              <NavLink
                key={m.to}
                to={m.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-md transition-colors text-lg ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                      : "text-gray-200 hover:bg-gray-800 hover:text-white"
                  }`
                }
              >
                <svg
                  className="w-5 h-5 opacity-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d={m.icon} />
                </svg>
                <span>{m.label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto">
            <button
              onClick={() => {
                try {
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  window.location.href = "/login";
                } catch (e) {}
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Overlay when menu open */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-30 md:hidden"
          />
        )}
      </div>
    </>
  );
}
