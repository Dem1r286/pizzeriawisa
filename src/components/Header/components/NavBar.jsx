import React, { useState, useEffect } from "react";
import HeaderLinks from "./HeaderLinks";

const NavBar= () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex justify-center items-center bg-white rounded-b-xl px-10 py-4 shadow-lg border-l-2 border-r-2 border-b-2 border-[#222222] transition-transform duration-300 ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <HeaderLinks />
      </div>
    </>
  );
};

export default NavBar;
