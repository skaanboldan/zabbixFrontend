// src/components/Rapor.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Rapor = () => {
  const [raporlar, setRaporlar] = useState([]);

  useEffect(() => {
    // Raportları API'den almak için bir istek yapın
    axios.get('https://api.example.com/raporlar')
      .then(response => {
        setRaporlar(response.data);
      })
      .catch(error => {
        console.error('Raporlar alınırken bir hata oluştu:', error);
      });
  }, []);

  return (
    <div>
      <h1>Rapor Uygulaması</h1>
      <ul>
        {raporlar.map(rapor => (
          <li key={rapor.id}>
            {rapor.baslik} - {rapor.icerik}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rapor;
