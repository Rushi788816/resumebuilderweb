import React from "react";

const Header = () => {
  return (
    <header
      style={{
        padding: "15px 20px",
        background: "#ffffff",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h3 style={{ margin: 0 }}>Resume Builder Dashboard</h3>

      <button
        style={{
          background: "#ff4d4d",
          padding: "6px 12px",
          borderRadius: "6px",
          border: "none",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </header>
  );
};

export default Header;
