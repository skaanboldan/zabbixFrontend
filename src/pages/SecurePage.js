// src/pages/SecurePage.js
import React, { useEffect } from 'react';
import CryptoService from '../services/CryptoService';
import { useAuth } from '../contexts/AuthContext';

const SecurePage = () => {
  const { sessionKey } = useAuth();
  const cryptoService = new CryptoService();

  useEffect(() => {
    const encryptedData = cryptoService.encrypt('Some sensitive data', sessionKey);
    console.log('Encrypted Data:', encryptedData);
  }, [sessionKey, cryptoService]);

  return (
    <div>
      <h1>Güvenli Sayfa</h1>
      <p>Bu sayfaya sadece giriş yapmış kullanıcılar erişebilir.</p>
    </div>
  );
};

export default SecurePage;
