import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  
  const isAuthenticated = localStorage.getItem("token"); // or check auth context

  if (!isAuthenticated) {
    
    return <Navigate to="/register" replace />;
  }

  return children;
}
