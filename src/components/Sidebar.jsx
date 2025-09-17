import React from "react";
import { FaHome, FaChartLine, FaAd, FaUser, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const icons = [<FaHome />, <FaChartLine />, <FaAd />, <FaUser />, <FaCog />];

  return (
    <div
      className="sidebar"
      style={{
        backgroundColor: "orange",   // Sidebar background
        minHeight: "100vh",
        padding: "16px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {icons.map((icon, i) => (
        <div
          key={i}
          className="sidebar-icon"
          style={{
            color: "white",         // White icons
            fontSize: "1.8rem",
            margin: "20px 0",
            cursor: "pointer",
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
