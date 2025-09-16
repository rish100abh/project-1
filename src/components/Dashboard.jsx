import React from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import Storefronts from './Storefronts';
import Trends from './Trends';
import TopList from './TopList';
import BiggestChanges from './BiggestChanges';

const Dashboard = () => (
  <div className="dashboard">
    <Header />
    <SummaryCards />
    <div className="section-row" style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
      <div style={{ flex: 1 }}><Storefronts /></div>
      <div style={{ flex: 1 }}><Trends /></div>
    </div>
    <div className="section-row" style={{ display: 'flex', gap: 32 }}>
      <div style={{ flex: 1 }}><TopList /></div>
      <div style={{ flex: 1 }}><BiggestChanges /></div>
    </div>
  </div>
);

export default Dashboard;
