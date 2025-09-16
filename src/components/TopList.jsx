import React from 'react';

const campaigns = [
  { name: 'Discovery (LOC)', country: 'India', spend: '$6,109.89', change: '+27.42%', installs: '$44', roas: '0.00%' },
  { name: 'Competitor (LOC)', country: 'India', spend: '$6,109.89', change: '+27.42%', installs: '$121', roas: '0.00%' },
  { name: 'Today tab (LOC)', country: 'India', spend: '$6,109.89', change: '+27.42%', installs: '$121', roas: '0.00%' },
  { name: 'Branding (LOC)', country: 'India', spend: '$6,109.89', change: '+27.42%', installs: '$44', roas: '0.00%' },
];

const TopList = () => (
  <div className="section">
    <div className="section-title">Top List</div>
    <table className="table">
      <thead>
        <tr><th>Campaigns</th><th>Spend</th><th>Installs</th><th>Conversions ROAS</th></tr>
      </thead>
      <tbody>
        {campaigns.map((c, i) => (
          <tr key={i}>
            <td>{c.name}<br /><span style={{ color: '#888' }}>{c.country}</span></td>
            <td>{c.spend}<br /><span style={{ color: '#2e7d32' }}>{c.change}</span></td>
            <td>{c.installs}</td>
            <td>{c.roas}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TopList;
