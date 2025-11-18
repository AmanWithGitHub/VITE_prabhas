// src/components/ProtectedRoute.jsx
// Route protection wrapper — copy EXACTLY as-is.

import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
