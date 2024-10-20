import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../context/GlobalStateContext";

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  const WithAuth: React.FC<P> = (props) => {
    const { state } = useContext(GlobalStateContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!state.isAuthenticated) {
        navigate("/login");
      }
    }, [state.isAuthenticated, navigate]);

    return state.isAuthenticated ? <WrappedComponent {...props} /> : null;
  };

  return WithAuth;
};

export default withAuth;
