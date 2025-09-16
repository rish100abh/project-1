import React, { useState } from 'react';

const campaigns = [
  { name: 'Discovery (LOC)', country: 'India', spend: '$6,109.89', change: '+27.42%', installs: '$44', roas: '0.00%', color: '#ffecb3' },
  { name: 'Competitor (LOC)', country: 'India', spend: '$6,109.89', change: '+27.42%', installs: '$121', roas: '0.00%', color: '#ffe0b2' },
  { name: 'Today tab (LOC)', country: 'India', spend: '$6,109.89', change: '+27.42%', installs: '$121', roas: '0.00%', color: '#fff8e1' },
  { name: 'Branding (LOC)', country: 'India', spend: '$6,109.89', change: '+27.42%', installs: '$44', roas: '0.00%', color: '#ffecb3' },
];

const tabs = ['Campaigns', 'Ad Groups', 'Keywords', 'Ads'];

const TopList = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="section">
      <div className="section-title" style={{ marginBottom: 8 }}>Top List</div>
      <div style={{ display: 'flex', gap: 24, marginBottom: 8 }}>
        {tabs.map((tab, i) => (
          <span
            key={tab}
            onClick={() => setActiveTab(i)}
            style={{
              fontWeight: activeTab === i ? 600 : 400,
              color: activeTab === i ? '#ff9800' : '#888',
              borderBottom: activeTab === i ? '2px solid #ff9800' : 'none',
              cursor: 'pointer',
              paddingBottom: 2,
              fontSize: '1rem',
            }}
          >
            {tab}
          </span>
        ))}
      </div>
      <table className="table">
        <thead>
          <tr><th>Campaigns</th><th>Spend</th><th>Installs</th><th>Conversions ROAS</th></tr>
        </thead>
        <tbody>
          {campaigns.map((c, i) => (
            <tr key={i} style={{ background: c.color }}>
              <td>{c.name}<br /><span style={{ color: '#888' }}>{c.country}</span></td>
              <td><span style={{ background: '#ffb300', color: '#fff', borderRadius: 4, padding: '2px 8px', fontWeight: 600 }}>{c.spend}</span><br /><span style={{ color: '#2e7d32' }}>{c.change}</span></td>
              <td>{c.installs}</td>
              <td>{c.roas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopList;
