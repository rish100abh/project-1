import React from "react";
import "./Storefronts.css";

const storefrontsData = [
  { country: "India", value: 6110, color: "#ff9800" },
  { country: "USA", value: 4200, color: "#42a5f5" },
  { country: "UK", value: 3500, color: "#66bb6a" },
];

const Storefronts = () => {
  const maxValue = Math.max(...storefrontsData.map((s) => s.value));

  return (
    <div className="section">
      <div className="section-title">
        <h3>
          Storefronts
        </h3>
      </div>

      <div className="map-card">
        {/* Map Placeholder */}
        <div className="map-placeholder">
          <img
  src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
  alt="World Map"
  className="world-map"
  style={{ filter: "invert(53%) sepia(85%) saturate(320%) hue-rotate(360deg) brightness(95%) contrast(95%)" }}
/>

          {/* Example highlights */}
          <div className="map-dot" style={{ left: "62%", top: "59%", background: "#ff9800" }}></div>
          <div className="map-dot" style={{ left: "25%", top: "35%", background: "#42a5f5" }}></div>
          <div className="map-dot" style={{ left: "45%", top: "30%", background: "#66bb6a" }}></div>
        </div>

        {/* Storefront Spend */}
        <div className="storefront-list">
          {storefrontsData.map((store, i) => (
            <div key={i} className="storefront-item">
              <div className="storefront-label">
                <span
                  className="dot"
                  style={{ background: store.color }}
                ></span>
                {store.country}
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${(store.value / maxValue) * 100}%`,
                    background: store.color,
                  }}
                ></div>
              </div>
              <div className="storefront-value">${(store.value / 1000).toFixed(1)}k</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Storefronts;
