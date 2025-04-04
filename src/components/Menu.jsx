import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = ({ handleMenuToggle }) => {
  return (
    <div
      id="menu"
      className="absolute top-0 left-0 w-screen h-screen bg-[#222222] z-100"
    >
      <Link
        to="/"
        className="absolute top-10 right-10 text-3xl text-white z-100"
        onClick={handleMenuToggle}
      >
        <X className="w-10 h-10" />
      </Link>
      <div className="flex justify-center items-center h-full text-white">
        <div className="relative px-30 max-w-[1700px]">
          <img src="/assets/menu.webp" alt="Menu" className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
