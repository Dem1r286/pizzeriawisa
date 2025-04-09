import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import { Menu } from "lucide-react";

const Header = () => {
  const handleScrollToHome = () => {
    const homepage = document.getElementById("homepage");
    if (homepage) {
      homepage.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 z-10 bg-gray/20 backdrop-blur-2xl pb-4 shadow-md lg:bg-white/0 lg:backdrop-blur-none lg:shadow-none">
      <div
        className="flex justify-center items-center lg:hidden"
        onClick={handleScrollToHome}
      >
        <img
          src="assets/other/wisalogohamburger.svg"
          alt="Wisa Logo"
          className="w-16 pt-4"
        />
      </div>
      <NavBar />
      <div></div>

      <div className="flex lg:hidden justify-center items-center gap-6 p-2 mt-5 bg-white rounded-xl shadow-lg border-2 border-[#222222] hover:scale-104 transition-transform duration-300">
        <Menu
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          size={30}
          className=""
        />
      </div>
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
};

export default Header;
