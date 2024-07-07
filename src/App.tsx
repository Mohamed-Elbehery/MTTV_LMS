import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./context/store";
import { useEffect } from "react";

const App = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !isAuthenticated &&
      !window.location.pathname.includes("introduction")
    ) {
      navigate("/login");
      localStorage.setItem("authenticated", "false");
    }
  }, [isAuthenticated, navigate]);

  return <Outlet />;
};

export default App;
