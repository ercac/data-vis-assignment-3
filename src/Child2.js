import React from 'react';
import Plot from 'react-plotly.js';

function Child2({ data }) {
  const days = ['Sun', 'Sat', 'Thur', 'Fri'];
  const avgTips = days.map(day => {
    const tips = data.filter(item => item.day === day).map(item => item.tip);
    return tips.length ? tips.reduce((a, b) => a + b, 0) / tips.length : 0;
  });

  return (
    <div>
      <Plot
        data={[
          {
            x: days,
            y: avgTips,
            type: 'bar',
            marker: { color: '#69b3a2' },
          },
        ]}
        layout={{
          title: 'Average Tip by Day',
          xaxis: { title: 'Day' },
          yaxis: { title: 'Average Tip' },
        }}
      />
    </div>
  );
}

export default Child2;
