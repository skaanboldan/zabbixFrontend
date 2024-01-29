// MyChartComponent.js dosyası

import React from 'react';
import LineChart from './LineChart'; // LineChart bileşeninin bulunduğu dosyanın yolu uygun şekilde güncellenmeli

function MyChartComponent() {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500} 
      height={300}
    />
  );
}

export default MyChartComponent;
