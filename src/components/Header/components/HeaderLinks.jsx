import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../Menu";

const HeaderLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="hidden lg:flex justify-center items-center">
        <div className="flex items-center gap-20 text-[#22222] text-lg">
          <p className="cursor-pointer">Početna</p>
          <a
            href="https://www.google.com/maps/place/Pizzeria+Wisa/@43.8567523,18.4013498,3129m/data=!3m1!1e3!4m6!3m5!1s0x4758c91fc72a27b5:0xbd2c27a37c39e043!8m2!3d43.8590939!4d18.402362!16s%2Fg%2F11h6ryb8j0?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            Lokacija
          </a>

          <p className="cursor-pointer">Kontakt</p>
          <Link
            to="/menu"
            className="cursor-pointer text-white font-semibold bg-[#F3274C] rounded-xl py-1 px-4"
          >
            Menu
          </Link>
        </div>
      </div>
      {isMenuOpen && <Menu handleMenuToggle={handleMenuToggle} />}
    </div>
  );
};

export default HeaderLinks;
