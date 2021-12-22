import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar>
        <div style={{ background: "#f9f9f9", width: "100%" }}>{children}</div>
      </Navbar>
    </div>
  );
};

export default Layout;
