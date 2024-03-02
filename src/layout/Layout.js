import React from "react";
import Navbar from "./Navbar/navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
