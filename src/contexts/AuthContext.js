// src/contexts/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [sessionKey, setSessionKey] = useState(null);

  const login = (userData) => {
    const generatedSessionKey = generateSessionKey();
    setSessionKey(generatedSessionKey);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    setSessionKey(null);
  };

  const generateSessionKey = () => {
    try {
      // Kriptografik olarak güvenli bir rastgele dize oluşturun
      const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      return randomString;
    } catch (error) {
      console.error('Oturum anahtarı oluşturulurken bir hata oluştu:', error);
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ user, sessionKey, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
