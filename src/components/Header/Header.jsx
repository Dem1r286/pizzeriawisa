import React from "react";
import HeaderLogo from "./components/HeaderLogo";
import HeaderLinks from "./components/HeaderLinks";

const Header = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-10 bg-white">
      <HeaderLogo />
      <HeaderLinks />
      <div></div>
    </div>
  );
};

export default Header;
