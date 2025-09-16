import React from "react";
import "./Header.css";

const Header = () => (
  <div className="header">
    <div>
      <h1>Overview dashboard</h1>
      <p>A consolidated view of your app efficiency by storefronts and key metrics.</p>
    </div>

    <div className="header-meta">
      <div className="meta-badge pdf">
        <span role="img" aria-label="pdf">📄</span> Pdf Name
      </div>

      <div className="meta-badge calendar">
        <span role="img" aria-label="calendar">📅</span> Last 7 Days
      </div>

      <div className="meta-badge date">Jul 5 - Jul 11, 2025</div>

      <div className="meta-badge">
        <span role="img" aria-label="filter">⚲</span>
      </div>
    </div>
  </div>
);

export default Header;

