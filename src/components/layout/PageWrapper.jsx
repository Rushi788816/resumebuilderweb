import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div
      style={{
        padding: "20px",
        marginLeft: "240px", // same as sidebar width
        minHeight: "100vh",
        background: "#f7f7f7",
      }}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
