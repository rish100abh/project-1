// Simple dashboard UI using vanilla JS
const root = document.getElementById('root');
root.innerHTML = `
  <div class="sidebar">
    <div class="sidebar-icon"></div>
    <div class="sidebar-icon"></div>
    <div class="sidebar-icon"></div>
    <div class="sidebar-icon"></div>
    <div class="sidebar-icon"></div>
  </div>
  <div class="dashboard" style="margin-left:80px;">
    <div class="header">
      <div>
        <div class="header-title">Overview dashboard</div>
        <div style="color:#888;font-size:1rem;">A consolidated view of your app efficiency by storefronts and key metrics.</div>
      </div>
      <div class="header-meta">
        <span style="background:#ffebee;padding:4px 12px;border-radius:6px;">Pdf Name</span>
        <span style="background:#e3f2fd;padding:4px 12px;border-radius:6px;">Last 7 Days</span>
        <span style="background:#fff;padding:4px 12px;border-radius:6px;">Jul 5 - Jul 11, 2025</span>
        <span style="font-size:1.5rem;">&#x1F5C3;</span>
      </div>
    </div>
    <div class="summary">
      <div class="summary-card">
        <div class="summary-label">Conversions ROAS:</div>
        <div class="summary-value">0.00%</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">Conversions ROAS:</div>
        <div class="summary-value">$6,109.89</div>
        <div style="color:#2e7d32;font-size:0.9rem;">+27.42%</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">Conversions ROAS:</div>
        <div class="summary-value">$2,101</div>
        <div style="color:#e65100;font-size:0.9rem;">0%</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">Conversions ROAS:</div>
        <div class="summary-value">$2.91</div>
        <div style="color:#e65100;font-size:0.9rem;">0%</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">Conversions ROAS:</div>
        <div class="summary-value">0</div>
        <div style="color:#e65100;font-size:0.9rem;">0%</div>
      </div>
      <div class="summary-card">
        <div class="summary-label">Conversions ROAS:</div>
        <div class="summary-value">$0.00</div>
        <div style="color:#e65100;font-size:0.9rem;">0%</div>
      </div>
    </div>
    <div class="section-row">
      <div class="section">
        <div class="section-title">Storefronts</div>
        <div class="map">World Map (India highlighted)</div>
        <div style="font-size:0.9rem;color:#888;">Spend: $6.11k</div>
      </div>
      <div class="section">
        <div class="section-title">Trends</div>
        <div class="chart">Spend Trend (India)</div>
      </div>
    </div>
    <div class="section-row">
      <div class="section">
        <div class="section-title">Top List</div>
        <table class="table">
          <thead>
            <tr><th>Campaigns</th><th>Spend</th><th>Installs</th><th>Conversions ROAS</th></tr>
          </thead>
          <tbody>
            <tr><td>Discovery (LOC)<br><span style="color:#888;">India</span></td><td>$6,109.89<br><span style="color:#2e7d32;">+27.42%</span></td><td>$44</td><td>0.00%</td></tr>
            <tr><td>Competitor (LOC)<br><span style="color:#888;">India</span></td><td>$6,109.89<br><span style="color:#e65100;">+27.42%</span></td><td>$121</td><td>0.00%</td></tr>
            <tr><td>Today tab (LOC)<br><span style="color:#888;">India</span></td><td>$6,109.89<br><span style="color:#e65100;">+27.42%</span></td><td>$121</td><td>0.00%</td></tr>
            <tr><td>Branding (LOC)<br><span style="color:#888;">India</span></td><td>$6,109.89<br><span style="color:#2e7d32;">+27.42%</span></td><td>$44</td><td>0.00%</td></tr>
          </tbody>
        </table>
      </div>
      <div class="section">
        <div class="section-title">Biggest Changes</div>
        <table class="table">
          <thead>
            <tr><th>Campaigns</th><th>Spend</th></tr>
          </thead>
          <tbody>
            <tr><td>Discovery (LOC)<br><span style="color:#888;">India</span></td><td><div class="bar" style="width:120px;background:#ff7a00;"></div> $6,109.89<br><span style="color:#2e7d32;">+27.42%</span></td></tr>
            <tr><td>Competitor (LOC)<br><span style="color:#888;">India</span></td><td><div class="bar" style="width:80px;background:#ffb300;"></div> $6,109.89<br><span style="color:#e65100;">+27.42%</span></td></tr>
            <tr><td>Today tab (LOC)<br><span style="color:#888;">India</span></td><td><div class="bar" style="width:60px;background:#ffd54f;"></div> $6,109.89<br><span style="color:#e65100;">+27.42%</span></td></tr>
            <tr><td>Branding (LOC)<br><span style="color:#888;">India</span></td><td><div class="bar" style="width:100px;background:#ff7a00;"></div> $6,109.89<br><span style="color:#2e7d32;">+27.42%</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
`;
