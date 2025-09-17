import React, { useState } from "react";

const campaigns = [
  {
    name: "Discovery (LOC)",
    country: "India",
    spend: "$6,109.89",
    change: "+27.42%",
    installs: "$44",
    roas: "0.00%",
    color: "#fff3e0",
  },
  {
    name: "Competitor (LOC)",
    country: "India",
    spend: "$6,109.89",
    change: "+27.42%",
    installs: "$121",
    roas: "0.00%",
    color: "#e3f2fd",
  },
  {
    name: "Today tab (LOC)",
    country: "India",
    spend: "$6,109.89",
    change: "+27.42%",
    installs: "$121",
    roas: "0.00%",
    color: "#f1f8e9",
  },
  {
    name: "Branding (LOC)",
    country: "India",
    spend: "$6,109.89",
    change: "+27.42%",
    installs: "$44",
    roas: "0.00%",
    color: "#fce4ec",
  },
];

const tabs = ["Campaigns", "Ad Groups", "Keywords", "Ads"];

const TopList = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      className="section"
      style={{
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        padding: 16,
        color: "#000", // ✅ Default black text
      }}
    >
      <div
        className="section-title"
        style={{ marginBottom: 12, fontWeight: 600, fontSize: "1.2rem" }}
      >
        Top List
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 24, marginBottom: 12 }}>
        {tabs.map((tab, i) => (
          <span
            key={tab}
            onClick={() => setActiveTab(i)}
            style={{
              fontWeight: activeTab === i ? 600 : 400,
              color: activeTab === i ? "#ff9800" : "#000", // ✅ Black inactive tabs
              borderBottom: activeTab === i ? "3px solid #ff9800" : "none",
              cursor: "pointer",
              paddingBottom: 4,
              fontSize: "1rem",
              transition: "all 0.2s ease",
            }}
          >
            {tab}
          </span>
        ))}
      </div>

      {/* Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          overflow: "hidden",
          borderRadius: 8,
          color: "#000", // ✅ Black text inside table
        }}
      >
        <thead>
          <tr
            style={{
              background: "#ff9800",
              color: "#fff", // keep header white for contrast
              textAlign: "left",
            }}
          >
            <th style={{ padding: "10px" }}>Campaigns</th>
            <th style={{ padding: "10px" }}>Spend</th>
            <th style={{ padding: "10px" }}>Installs</th>
            <th style={{ padding: "10px" }}>Conversions ROAS</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((c, i) => (
            <tr
              key={i}
              style={{
                background: c.color,
                transition: "0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffe082")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = c.color)
              }
            >
              <td style={{ padding: "12px" }}>
                <strong>{c.name}</strong>
                <br />
                <span style={{ color: "#333", fontSize: "0.85rem" }}>
                  {c.country}
                </span>
              </td>
              <td style={{ padding: "12px" }}>
                <span
                  style={{
                    background: "#ff9800",
                    color: "#fff",
                    borderRadius: 6,
                    padding: "4px 10px",
                    fontWeight: 600,
                  }}
                >
                  {c.spend}
                </span>
                <br />
                <span style={{ color: "#2e7d32", fontWeight: 500 }}>
                  {c.change}
                </span>
              </td>
              <td style={{ padding: "12px", fontWeight: 600 }}>{c.installs}</td>
              <td style={{ padding: "12px", fontWeight: 600 }}>{c.roas}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopList;
