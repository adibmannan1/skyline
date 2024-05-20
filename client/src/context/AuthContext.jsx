import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

  const updateUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    if(user===null) localStorage.removeItem("user")
  }, [user]);
    

  return (
    <AuthContext.Provider value={{ user, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
