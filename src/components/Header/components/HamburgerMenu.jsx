import React from "react";
import { X } from "lucide-react";
import Waves from "../../Footer/components/Waves";
import HeaderLinks from "./HeaderLinks";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const customWaveStyles = [
    {
      height: "14rem",
      opacity: 0.6,
      color: "#f3274c",
      options: { amplitude: 20, speed: 0.2, points: 6 },
    },
    {
      height: "10rem",
      opacity: 0.8,
      color: "#f3274c",
      options: { amplitude: 20, speed: 0.1, points: 5 },
    },
    {
      height: "7rem",
      opacity: 0.1,
      color: "#f3274c",
      options: { amplitude: 30, speed: 0.3, points: 5 },
    },
  ];

  return (
    <div
      className={`absolute top-0 right-0 w-full h-screen z-10000 flex lg:hidden bg-gray-900 bg-opacity-90 flex flex-col shadow-lg items-center justify-between text-white text-lg transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="w-full flex items-center justify-between p-8">
        <img src="/assets/wisalogohamburger.svg" className="w-20" alt="Logo" />

        <div className="flex lg:hidden items-center gap-6 p-2 bg-white rounded-xl shadow-md border-2 border-[#222222] hover:scale-104 transition-transform duration-300">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <X size={40} className="text-black" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center flex lg:hidden mb-60 text-white">
          <HeaderLinks />
      </div>
      <div></div>
      <div className="absolute bottom-0 w-full">
        <Waves customStyles={customWaveStyles} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
