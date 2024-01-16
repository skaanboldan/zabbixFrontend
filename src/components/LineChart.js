// src/components/LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Örnek Veri Seti',
        data: data.map(entry => entry.value),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
      },
      y: {
        min: 0,
      },
    },
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
