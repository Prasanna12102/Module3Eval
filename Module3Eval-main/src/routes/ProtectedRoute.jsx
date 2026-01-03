import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { auth } = useContext(AuthContext);

  if (!auth.isAuth) return <Navigate to="/login" />;
  if (auth.role !== role) return <Navigate to="/login" />;

  return children;
}
