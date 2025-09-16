import React from 'react';
import Header from './Header';
import SummaryCards from './SummaryCards';
import Storefronts from './Storefronts';
import Trends from './Trends';
import TopList from './TopList';
import BiggestChanges from './BiggestChanges';

const Dashboard = () => (
  <div className="dashboard" style={{ marginLeft: 80 }}>
    <Header />
    <SummaryCards />
    <div className="section-row">
      <Storefronts />
      <Trends />
    </div>
    <div className="section-row">
      <TopList />
      <BiggestChanges />
    </div>
  </div>
);

export default Dashboard;
