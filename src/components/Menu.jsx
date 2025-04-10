import React from "react";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = ({ handleMenuToggle }) => {
  return (
    <div
      id="menu"
      className="fixed top-0 left-0 w-screen h-screen overflow-y-auto bg-[#222222] z-[100] flex flex-col items-center"
      onClick={handleMenuToggle}
    >
      <Link
        to="/"
        className="absolute top-10 right-10 text-3xl text-white z-[100]"
        onClick={handleMenuToggle}
      >
        <X className="w-10 h-10" />
      </Link>

      <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-20">

        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold">
            Meni
          </h1>
          <h2 className="text-sm md:text-lg text-gray-300 mt-2">
            Pogledajte naš meni – sve što nudimo na jednom mjestu
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-10 px-4">
          <img
            src="/assets/menus/pizzas.webp"
            alt="Pizze"
            className="w-full object-contain"
          />
          <img
            src="/assets/menus/sandwiches.webp"
            alt="Sendviči"
            className="w-full object-contain"
          />
          <img
            src="/assets/menus/drinks.webp"
            alt="Pića"
            className="w-full object-contain"
          />
          <img
            src="/assets/menus/other.webp"
            alt="Ostalo"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
