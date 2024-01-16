// src/pages/ChartPage.js
import React, { useState, useEffect } from 'react';
import LineChart from '../components/LineChart';

const ChartPage = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // API'den veri çekme işlemi
    fetch('https://api.example.com/chartdata')
      .then(response => response.json())
      .then(data => setChartData(data))
      .catch(error => console.error('Veri alınırken bir hata oluştu:', error));
  }, []);

  return (
    <div>
      <h1>Çizgi Grafiği Sayfası</h1>
      <LineChart data={chartData} />
    </div>
  );
};

export default ChartPage;
