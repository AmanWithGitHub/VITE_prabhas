// src/utils/auth.js
// Small auth helpers that use localStorage.
// Copy this file exactly as-is.

export function setToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function removeToken() {
  localStorage.removeItem("token");
}

export function setRole(role) {
  localStorage.setItem("role", role);
}

export function getRole() {
  return localStorage.getItem("role");
}

export function isAuthenticated() {
  const t = getToken();
  return typeof t === "string" && t.length > 0;
}
