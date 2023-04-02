import React, { createContext, useState } from "react";
import {useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [AuthToken, setAuthToken] = useState(
    localStorage?.getItem("accessToken")
      ? JSON.parse(localStorage.getItem("accessToken"))
      : null
  );
  const [User, setUser] = useState(
    localStorage?.getItem("activeUser")
      ? JSON.parse(localStorage.getItem("activeUser"))
      : null
  );

  const logout =()=>{
    setAuthToken(null)
    setUser(null)
    localStorage.removeItem("accessToken");
    localStorage.removeItem("activeUser");
    navigate("/");
    
  }

  return (
    <AuthContext.Provider value={{ AuthToken, setAuthToken, User, setUser,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
