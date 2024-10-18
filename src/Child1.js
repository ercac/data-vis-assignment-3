import React from 'react';
import Plot from 'react-plotly.js';

function Child1({ data }) {
  const totalBills = data.map(item => item.total_bill);
  const tips = data.map(item => item.tip);

  return (
    <div>
      <Plot
        data={[
          {
            x: totalBills,
            y: tips,
            type: 'scatter',
            mode: 'markers',
            marker: { color: '#69b3a2' },
          },
        ]}
        layout={{
          title: 'Total Bill vs Tips',
          xaxis: { title: 'Total Bill' },
          yaxis: { title: 'Tips' },
        }}
      />
    </div>
  );
}

export default Child1;
