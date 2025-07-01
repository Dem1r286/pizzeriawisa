import React, { useState } from "react";
import NavBar from "./components/NavBar";
import HamburgerMenu from "./components/HamburgerMenu";
import { Menu } from "lucide-react";
import HeaderLogo from "./components/HeaderLogo";

const Header = () => {
  const handleScrollToHome = () => {
    const homepage = document.getElementById("homepage");
    if (homepage) {
      homepage.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 z-10 pb-4">
      {/* <div
        className="flex justify-center items-center lg:hidden"
        onClick={handleScrollToHome}
      >
        <img
          src="assets/other/wisalogohamburger.svg"
          alt="Wisa Logo"
          className="w-16 pt-4"
        />
      </div> */}
      <NavBar />
      <div></div>

      <div className="flex lg:hidden justify-center items-center gap-6 p-2 mt-6 bg-[#f79728] rounded-xl border-2 border-white hover:scale-104 transition-transform duration-300"
         style={{ boxShadow: "0 0 20px rgba(66, 43, 43, 0.4)" }}>
        <Menu onClick={() => setIsMenuOpen(!isMenuOpen)} size={30} className="text-white" />
      </div>
      <HamburgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Header;

