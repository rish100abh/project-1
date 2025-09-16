import React from "react";
import { FaHome, FaChartLine, FaAd, FaUser, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  const icons = [
    { icon: <FaHome />, color: "#ff6f61" },
    { icon: <FaChartLine />, color: "#42a5f5" },
    { icon: <FaAd />, color: "#ffa726" },
    { icon: <FaUser />, color: "#66bb6a" },
    { icon: <FaCog />, color: "#ab47bc" },
  ];

  return (
    <div className="sidebar">
      {icons.map((item, i) => (
        <div
          key={i}
          className="sidebar-icon"
          style={{ color: item.color }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
