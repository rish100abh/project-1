import React from 'react';

const changes = [
  { name: 'Discovery (LOC)', country: 'India', bar: 120, color: '#ff7a00', spend: '$6,109.89', change: '+27.42%', changeColor: '#2e7d32' },
  { name: 'Competitor (LOC)', country: 'India', bar: 80, color: '#ffb300', spend: '$6,109.89', change: '+27.42%', changeColor: '#e65100' },
  { name: 'Today tab (LOC)', country: 'India', bar: 60, color: '#ffd54f', spend: '$6,109.89', change: '+27.42%', changeColor: '#e65100' },
  { name: 'Branding (LOC)', country: 'India', bar: 100, color: '#ff7a00', spend: '$6,109.89', change: '+27.42%', changeColor: '#2e7d32' },
];

const BiggestChanges = () => (
  <div className="section">
    <div className="section-title">Biggest Changes</div>
    <table className="table">
      <thead>
        <tr><th>Campaigns</th><th>Spend</th></tr>
      </thead>
      <tbody>
        {changes.map((c, i) => (
          <tr key={i}>
            <td>{c.name}<br /><span style={{ color: '#888' }}>{c.country}</span></td>
            <td>
              <div className="bar" style={{ width: c.bar, background: c.color }}></div> {c.spend}<br />
              <span style={{ color: c.changeColor }}>{c.change}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default BiggestChanges;
