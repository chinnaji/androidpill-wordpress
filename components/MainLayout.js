import React from "react";
// import SocialBar from "./ads/SocialBar";
import Footer from "./Footer";
import Navbar from "./Navbar";

function MainLayout({ children }) {
  return (
    <div className="text-zinc-500">
      <Navbar />
      <section>{children}</section>
      {/* <SocialBar /> */}
      <Footer />
    </div>
  );
}

export default MainLayout;
