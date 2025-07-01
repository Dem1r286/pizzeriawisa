import React from "react";
import Waves from "./components/Waves";

const Footer = () => {
  return (
    <div id="footer" className="relative w-full text-white mt-10 flex flex-col z-2">
      <Waves />

      <div className="footer-content flex flex md:flex-row flex-col justify-center gap-[5vw] lg:gap-60 items-center h-full pb-10">

        <div className="flex flex-col gap-10 items-start">
          <div className="flex md:flex-col flex-row items-start justify-start">

            <div className="flex justify-center items-start flex-col gap-2">
              <h3 className="font-bold sm:text-xl text-sm mb-2">Kontakt</h3>
              <p className="sm:text-md text-xs">
                📍 Lokacija: Tešanjska bb, Sarajevo, Bosnia and Herzegovina
              </p>
              <p className="sm:text-md text-xs">
                📞 Telefon:{" "}
                <span className="font-bold sm:text-md text-xs">
                  +387 61 205 605 ili +387 62 805 205
                </span>
              </p>
              <p className="sm:text-md text-xs">
                📧 Email: wisa.pizzeria@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-20">
            <div className="flex flex-col justify-center items-start">
              <h3 className="font-bold sm:text-xl text-sm mb-2">
                Radno vrijeme
              </h3>
              <p className="sm:text-md text-xs">
                Ponedjeljak - Subota:
                <span className="font-bold text-md"> 09:00 - 22:00</span>
              </p>
              <p className="sm:text-md text-xs">Nedjelja neradna</p>
            </div>

            <div className="flex flex-col gap-4 justify-center self-start mt-2">
              <a
                href="https://www.instagram.com/pizzawisa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/other/instagram.webp"
                  className="w-6 cursor-pointer"
                  alt="Instagram Profil"
                />
              </a>
              <a
                href="https://www.facebook.com/pizzawisa/?locale=hr_HR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="assets/other/facebook.webp"
                  className="w-6 cursor-pointer"
                  alt="Facebook Profil"
                />
              </a>
            </div>
          </div>

        </div>

        <div
          id="location"
          className="flex justify-center items-center sm:w-[350px] sm:h-[250px] w-[300px] h-[200px] mt-10 sm:mt-0"
        >
          <iframe
            title="Google mapa - Pizzeria Wisa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4382.738588335883!2d18.401471504572623!3d43.858428572748146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c91fc72a27b5%3A0xbd2c27a37c39e043!2sPizzeria%20Wisa!5e1!3m2!1sen!2sba!4v1743601768273!5m2!1sen!2sba"
            style={{ border: 0, borderRadius: "10px" }}
            width={"100%"}
            height={"100%"}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex flex-row justify-center items-center sm:text-xs text-[9px] w-full pb-5">
        <img
          src="assets/other/plamen.webp"
          className="cursor-pointer w-30"
          alt="Facebook Profil"
        />
      </div>

      <div className="flex justify-center items-center gap-10 sm:text-xs text-[9px] w-full py-3 ml-1 md:ml-2">
        <p className="cursor-pointer">© Pizzeria Wisa</p>
        <p className="cursor-pointer">Uslovi korištenja</p>
        <p className="cursor-pointer">Politika privatnosti</p>
      </div>
    </div>
  );
};

export default Footer;
