// src/pages/LoginPage.js
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';


const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const { login, sessionKey } = useAuth();
  const history = useHistory();

  const handleLogin = (username) => {
    setLoggedInUser(username);
    login({ username });
    console.log('Oturum Anahtarı:', sessionKey);
    console.log('Anasayfaya Yönlendirme yapılıyor...');

    history.push('/securepage'); // Anasayfaya yönlendir
  };

  return (
    <div>
      {loggedInUser ? (
        <p>Giriş Yapıldı: {loggedInUser}</p>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
};

export default LoginPage;
