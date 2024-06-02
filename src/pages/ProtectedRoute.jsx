import { useNavigate } from "react-router";
import { useAuth } from "../Contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);
  return isAuth ? children : null;
}

export default ProtectedRoute;
