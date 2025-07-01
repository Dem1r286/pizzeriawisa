import React, { useEffect } from "react";
import { X } from "lucide-react";
import Waves from "../../Footer/components/Waves";
import HeaderLinks from "./HeaderLinks";

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const customWaveStyles = [
    {
      height: {
        base: "16rem",
        sm: "14rem",
      },
      opacity: 0.4,
      color: "#f79728",
      options: { amplitude: 20, speed: 0.2, points: 6 },
    },
    {
      height: {
        base: "14rem",
        sm: "12rem",
      },
      opacity: 0.5,
      color: "#f79728",
      options: { amplitude: 20, speed: 0.1, points: 5 },
    },
    {
      height: {
        base: "10rem",
        sm: "10rem",
      },
      opacity: 0.9,
      color: "#f79728",
      options: { amplitude: 20, speed: 0.3, points: 5 },
    },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);


  return (
    <div
      className={`absolute top-0 right-0 w-full h-screen z-10000 flex lg:hidden bg-gray-900 bg-opacity-90 flex flex-col shadow-lg items-center justify-between text-white text-lg transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <div className="w-full flex items-center justify-end p-6">
        <div className="flex lg:hidden items-center gap-6 p-2 bg-[#f79728] rounded-xl shadow-md border-2 border-white hover:scale-104 transition-transform duration-300">
          <X onClick={() => setIsMenuOpen(false)} size={30} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col items-center flex lg:hidden mb-40 text-white">
        <HeaderLinks onLinkClick={() => setIsMenuOpen(false)} />
      </div>
      <div></div>

      <div className="absolute bottom-0 w-full">
        <Waves customStyles={customWaveStyles} />
      </div>
    </div>
  );
};

export default HamburgerMenu;
