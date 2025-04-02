import React from "react";
import { Link } from "react-router-dom";


const HeaderLinks = () => {
    return (
      <div className="hidden lg:flex justify-center items-center mr-16">
        <div className="flex items-center gap-14 text-gray-900">
          <Link to="/" className="cursor-pointer">
            Početna
          </Link>
          <Link to="/travel-packages" className="cursor-pointer">
            O nama
          </Link>
          <Link
            to="/book-trip"
            className="cursor-pointer"
          >
            Kontakt
          </Link>
          <Link to="/investment" className="cursor-pointer">
            Lokacija
          </Link>
          <Link to="/contact" className="cursor-pointer">
            Meni
          </Link>
        </div>
      </div>
    );
  };

  export default HeaderLinks;