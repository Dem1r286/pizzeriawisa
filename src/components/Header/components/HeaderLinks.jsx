import React from "react";


const HeaderLinks = () => {
    return (
      <div className="hidden lg:flex justify-center items-center mr-16">
        <div className="flex items-center gap-20 text-[#22222] text-lg">
          <p to="/" className="cursor-pointer">
            Početna
          </p>
          <p to="/travel-packages" className="cursor-pointer">O nama</p>
          <p to="/book-trip" className="cursor-pointer">
            Menu
          </p>
          <p to="/investment" className="cursor-pointer">
            Lokacija
          </p>
          <p to="/contact" className="cursor-pointer">
            Kontakt
          </p>
        </div>
      </div>
    );
  };

  export default HeaderLinks;