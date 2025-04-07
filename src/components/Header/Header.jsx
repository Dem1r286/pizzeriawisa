import React from "react";
import HeaderLogo from "./components/HeaderLogo";
import NavBar from "./components/NavBar";
import { useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div
      className="fixed top-0 left-0 w-full flex items-center justify-between px-6 z-10">
      <HeaderLogo />
      <NavBar />
      <div></div>
      
      <div className="flex lg:hidden items-center gap-6 p-2 bg-white rounded-xl shadow-md border-2 border-[#222222] hover:scale-104 transition-transform duration-300">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={40} className="" />
          </button>
        </div>
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Header;
