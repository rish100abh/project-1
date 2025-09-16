import React, { useState } from 'react';

const changes = [
  { name: 'Discovery (LOC)', country: 'India', bar: 120, color: '#ff9800', spend: '$6,109.89', change: '+27.42%', changeColor: '#2e7d32' },
  { name: 'Competitor (LOC)', country: 'India', bar: 80, color: '#ffb300', spend: '$6,109.89', change: '+27.42%', changeColor: '#e65100' },
  { name: 'Today tab (LOC)', country: 'India', bar: 60, color: '#ffd54f', spend: '$6,109.89', change: '+27.42%', changeColor: '#e65100' },
  { name: 'Branding (LOC)', country: 'India', bar: 100, color: '#ff9800', spend: '$6,109.89', change: '+27.42%', changeColor: '#2e7d32' },
];

const tabs = ['Campaigns', 'Ad Groups', 'Keywords', 'Ads'];

const BiggestChanges = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="section">
      <div className="section-title" style={{ marginBottom: 8 }}>Biggest Changes</div>
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
          <tr><th>Campaigns</th><th>Spend</th></tr>
        </thead>
        <tbody>
          {changes.map((c, i) => (
            <tr key={i}>
              <td>{c.name}<br /><span style={{ color: '#888' }}>{c.country}</span></td>
              <td>
                <div style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }}>
                  <div style={{ width: c.bar, height: 16, background: c.color, borderRadius: 4 }}></div>
                </div>
                <span style={{ fontWeight: 600 }}>{c.spend}</span><br />
                <span style={{ color: c.changeColor }}>{c.change}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BiggestChanges;
