import React from "react";
import { Link } from "react-router-dom";

const HeaderLinks = ({ onLinkClick }) => {
  const handleClick = (action) => {
    if (typeof action === "function") {
      action();
    }
    if (window.innerWidth < 1024 && onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="flex lg:flex-row flex-col items-center gap-20 text-lg font-semibold">
      <button
        onClick={() =>
          handleClick(() => {
            const section = document.getElementById("homepage");
            section?.scrollIntoView({ behavior: "smooth" });
          })
        }
        className="cursor-pointer"
      >
        Početna
      </button>
      <a
        href="https://maps.app.goo.gl/d7gj7VM7iFw2U7ZA8"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
        onClick={() => {
          if (window.innerWidth < 1024 && onLinkClick) onLinkClick();
        }}
      >
        Lokacija
      </a>
      <button
        onClick={() =>
          handleClick(() => {
            const section = document.getElementById("footer");
            section?.scrollIntoView({ behavior: "smooth" });
          })
        }
        className="cursor-pointer"
      >
        Kontakt
      </button>
      <Link
        to="/menu"
        className="cursor-pointer text-white font-semibold bg-gradient-to-b from-[#F3274C] to-[#d4203f] rounded-xl py-1 px-4 hover:scale-105 transition-transform duration-300"
        style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}
        onClick={() => {
          if (window.innerWidth < 1024 && onLinkClick) onLinkClick();
        }}
      >
        Menu
      </Link>
    </div>
  );
};

export default HeaderLinks;
