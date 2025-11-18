// src/components/AdminProtectedRoute.jsx
// Admin-only route protector — copy EXACTLY as-is.

import { Navigate } from "react-router-dom";
import { isAuthenticated, isAdmin } from "../utils/auth";

export default function AdminProtectedRoute({ children }) {
  if (!isAuthenticated() || !isAdmin()) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
}
