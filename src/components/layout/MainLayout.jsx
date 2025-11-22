import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import PageWrapper from "./PageWrapper";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Sidebar />

      <div className="content-area">
        <Header />
        <PageWrapper>{children}</PageWrapper>
      </div>
    </div>
  );
};

export default MainLayout;
