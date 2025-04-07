import React from "react";
import { Link } from "react-router-dom";

const HeaderLinks = () => {
    return (
        <div className="flex lg:flex-row flex-col items-center gap-20 text-lg font-semibold">
          <button
            onClick={() => {
              const section = document.getElementById("homepage");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="cursor-pointer"
          >
            Početna
          </button>
          <a
            href="https://maps.app.goo.gl/d7gj7VM7iFw2U7ZA8"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            Lokacija
          </a>
          <button
            onClick={() => {
              const section = document.getElementById("footer");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="cursor-pointer"
          >
            Kontakt
          </button>
          <Link 
            to="/menu"
            className="cursor-pointer text-white font-semibold bg-[#F3274C] rounded-xl py-1 px-4 hover:scale-105 transition-transform duration-300"
          >
            Menu
          </Link>
        </div>
    );
}

export default HeaderLinks;