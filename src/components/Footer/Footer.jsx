import React from "react";
import Waves from "./components/Waves";

const Footer = () => {
  return (
    <div id="footer" className="relative w-full text-white mt-40 flex flex-col">
      <Waves />

      <div className="footer-content flex z-10 flex flex-row justify-center gap-[10vw] items-center h-full pb-10">
        <div className="w-1/4 text-xs mt-6">
          <h3 className="font-bold text-xl mb-2">Kontakt</h3>
          <p>📍 Lokacija: Pizzeria Wisa, 123 Pizza Street, Cityville</p>
          <p>📞 Telefon: +387 123 456 789</p>
          <p>📧 Email: info@pizzeriwisa.com</p>
          <h3 className="font-bold text-lg mt-6 mb-2">Radno vrijeme</h3>
          <p>Ponedjeljak - Petak: 10:00 - 22:00</p>
          <p>Subota - Nedjelja: 12:00 - 23:00</p>
        </div>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4382.738588335883!2d18.401471504572623!3d43.858428572748146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c91fc72a27b5%3A0xbd2c27a37c39e043!2sPizzeria%20Wisa!5e1!3m2!1sen!2sba!4v1743601768273!5m2!1sen!2sba"
            width="350"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="flex justify-center items-center gap-10 text-xs w-full py-3">
        <p className="cursor-pointer">© Pizzeria Wisa</p>
        <p className="cursor-pointer">Uslovi korištenja</p>
        <p className="cursor-pointer">Politika privatnosti</p>
      </div>
    </div>
  );
};

export default Footer;
