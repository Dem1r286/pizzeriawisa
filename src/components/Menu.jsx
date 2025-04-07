import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = ({ handleMenuToggle }) => {
  return (
    <div
      id="menu"
      className="absolute top-0 left-0 w-screen h-full bg-[#222222] z-100 flex flex-col justify-center items-center overflow-x-hidden"
    >
      <Link
        to="/"
        className="absolute top-10 right-10 text-3xl text-white z-100"
        onClick={handleMenuToggle}
      >
        <X className="w-10 h-10" />
      </Link>
      <div className="w-full h-full max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 py-40">
          <img
            src="assets/menus/pizzas.jpg"
            alt="Menu"
            className="w-full object-contain"
          />
          <img
            src="assets/menus/drinks.jpg"
            alt="Menu"
            className="w-full object-contain"
          />
          <img
            src="assets/menus/sandwiches.png"
            alt="Menu"
            className="w-full object-contain"
          />
          <img
            src="assets/menus/other.png"
            alt="Menu"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
