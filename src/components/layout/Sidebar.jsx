import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
      style={{
        width: "240px",
        height: "100vh",
        background: "#1e1e2f",
        color: "#fff",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h2 style={{ marginBottom: "30px", fontSize: "20px" }}>ResumeBuilder</h2>

      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ marginBottom: "15px" }}>
            <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>
              Dashboard
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link to="/resume-builder" style={{ color: "#fff", textDecoration: "none" }}>
              Build Resume
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link to="/templates" style={{ color: "#fff", textDecoration: "none" }}>
              Templates
            </Link>
          </li>

          <li style={{ marginBottom: "15px" }}>
            <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
