import React from "react";
import "./Trends.css";

const trendsData = [
  { country: "India", color: "#ff9800", points: [10, 40, 80, 60, 90, 70, 50] },
  { country: "USA", color: "#42a5f5", points: [20, 50, 60, 55, 70, 65, 75] },
  { country: "UK", color: "#66bb6a", points: [15, 30, 50, 45, 60, 55, 65] },
];

const maxY = 100; // Y-axis upper limit
const minY = 0;   // Y-axis lower limit

const Trends = () => {
  const width = 320;
  const height = 160;
  const stepX = width / (trendsData[0].points.length - 1);

  return (
    <div className="section">
      <div className="section-title">Trends</div>

      <div className="chart-card">
        <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
          {/* Grid Lines */}
          {[0.25, 0.5, 0.75, 1].map((p, i) => (
            <line
              key={i}
              x1="0"
              y1={height * p}
              x2={width}
              y2={height * p}
              stroke="#e0e0e0"
              strokeWidth="1"
              strokeDasharray="4"
            />
          ))}

          {/* Y-axis */}
          <line x1="0" y1="0" x2="0" y2={height} stroke="#888" strokeWidth="2" />
          {/* X-axis */}
          <line x1="0" y1={height} x2={width} y2={height} stroke="#888" strokeWidth="2" />

          {/* Data lines */}
          {trendsData.map((line, i) => {
            const polyPoints = line.points
              .map(
                (y, idx) =>
                  `${idx * stepX},${height - (y / maxY) * height}`
              )
              .join(" ");

            return (
              <React.Fragment key={i}>
                <polyline
                  fill="none"
                  stroke={line.color}
                  strokeWidth="3"
                  points={polyPoints}
                />
                {line.points.map((y, idx) => (
                  <circle
                    key={idx}
                    cx={idx * stepX}
                    cy={height - (y / maxY) * height}
                    r="4"
                    fill={line.color}
                  />
                ))}
              </React.Fragment>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="legend">
          {trendsData.map((line, i) => (
            <div className="legend-item" key={i}>
              <span
                className="legend-color"
                style={{ background: line.color }}
              ></span>
              <span className="legend-label">{line.country}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trends;
