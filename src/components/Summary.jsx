import React from 'react';

const summaryData = [
  { label: 'Conversions ROAS:', value: '0.00%', change: null },
  { label: 'Conversions ROAS:', value: '$6,109.89', change: '+27.42%', color: '#2e7d32' },
  { label: 'Conversions ROAS:', value: '$2,101', change: '0%', color: '#e65100' },
  { label: 'Conversions ROAS:', value: '$2.91', change: '0%', color: '#e65100' },
  { label: 'Conversions ROAS:', value: '0', change: '0%', color: '#e65100' },
  { label: 'Conversions ROAS:', value: '$0.00', change: '0%', color: '#e65100' },
];

const Summary = () => (
  <div className="summary">
    {summaryData.map((item, i) => (
      <div className="summary-card" key={i}>
        <div className="summary-label">{item.label}</div>
        <div className="summary-value">{item.value}</div>
        {item.change && (
          <div style={{ color: item.color || '#2e7d32', fontSize: '0.9rem' }}>{item.change}</div>
        )}
      </div>
    ))}
  </div>
);

export default Summary;
