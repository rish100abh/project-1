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
    <div className="section" style={{ background: '#fafafa', borderRadius: 12, padding: 16, boxShadow: '0 2px 6px rgba(0,0,0,0.08)' }}>
      <div className="section-title" style={{ marginBottom: 12, fontSize: '1.2rem', fontWeight: 600, color: '#000' }}>
        Biggest Changes
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 24, marginBottom: 12 }}>
        {tabs.map((tab, i) => (
          <span
            key={tab}
            onClick={() => setActiveTab(i)}
            style={{
              fontWeight: activeTab === i ? 600 : 400,
              color: activeTab === i ? '#ff9800' : '#555',
              borderBottom: activeTab === i ? '2px solid #ff9800' : 'none',
              cursor: 'pointer',
              paddingBottom: 4,
              fontSize: '1rem',
              transition: '0.3s',
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Table */}
      <table className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f0f0f0', textAlign: 'left' }}>
            <th style={{ padding: '10px 12px', color: '#000', fontWeight: 600 }}>Campaigns</th>
            <th style={{ padding: '10px 12px', color: '#000', fontWeight: 600 }}>Spend</th>
          </tr>
        </thead>
        <tbody>
          {changes.map((c, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #e0e0e0' }}>
              <td style={{ padding: '12px', color: '#000', fontSize: '0.95rem' }}>
                {c.name}
                <br />
                <span style={{ color: '#555', fontSize: '0.85rem' }}>{c.country}</span>
              </td>
              <td style={{ padding: '12px', color: '#000' }}>
                <div style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: 8 }}>
                  <div style={{ width: c.bar, height: 14, background: c.color, borderRadius: 4 }}></div>
                </div>
                <span style={{ fontWeight: 700, color: '#000' }}>{c.spend}</span>
                <br />
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: c.changeColor }}>{c.change}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BiggestChanges;
