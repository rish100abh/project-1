import React from "react";
import "./SummaryCard.css";

const summaryData = [
  { label: "Conversions ROAS:", value: "0.00%", sub: "0%", color: "#888" },
  { label: "Revenue:", value: "$6,109.89", sub: "+27.42%", color: "#2e7d32" },
  { label: "Clicks:", value: "0", sub: "0%", color: "#888" },
  { label: "Ad Spend:", value: "$2,101", sub: "0%", color: "#e65100" },
  { label: "CPA:", value: "$2.91", sub: "0%", color: "#e65100" },
  { label: "Conversions:", value: "0", sub: "0%", color: "#888" },
];

const SummaryCards = () => (
  <div className="summary-row">
    <div>Total Summary</div>
    <div className="summary-cards-container">
      {summaryData.map((item, i) => (
        <div key={i} className="summary-card">
          <div className="label">{item.label}</div>
          <div className="value">{item.value}</div>
          <div className="sub" style={{ color: item.color }}>
            {item.sub}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SummaryCards;
