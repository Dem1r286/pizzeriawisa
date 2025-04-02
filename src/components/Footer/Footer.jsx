import React from "react";
import Waves from "./components/Waves";

const Footer = () => {
  return (
    <div id="footer" className="relative w-full text-white mt-80 flex flex-col">
      <Waves />
      <div className="flex justify-center items-center gap-10 text-xs w-full py-3">
        <p className="cursor-pointer">© Pizzeria Wisa</p>
        <p className="cursor-pointer">Uslovi korištenja</p>
        <p className="cursor-pointer">Politika privatnosti</p>
      </div>
    </div>
  );
};

export default Footer;