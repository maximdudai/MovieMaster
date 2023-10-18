import { createContext, useState, useEffect } from "react";
import propTypes from "prop-types";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [authData, setAuthData] = useState(() => {
    const storedAuthData = sessionStorage.getItem("authData");
    return storedAuthData ? JSON.parse(storedAuthData) : null;
  });

  const handleAuthentication = ({ email, password }) => {
    if (!isLogged) setIsLogged(true);

    const newAuthData = { email, password };
    setAuthData(newAuthData);
    sessionStorage.setItem("authData", JSON.stringify(newAuthData));
  }

  useEffect(() => {
    const storedAuthData = sessionStorage.getItem("authData");
    if (storedAuthData) {
      setAuthData(JSON.parse(storedAuthData));
      setIsLogged(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLogged, handleAuthentication }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: propTypes.node.isRequired
}
