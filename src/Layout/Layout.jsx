import { useEffect } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Aos from "aos";
import React from "react";

const Layout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container-3xl overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
