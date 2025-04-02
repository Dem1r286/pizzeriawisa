import React from "react";
import Waves from "./components/Waves";

const Footer = () => {
  return (
    <div id="footer" className="relative w-full text-white mt-40 flex flex-col">
      <Waves />

      <div className="footer-content flex z-10 px-60 flex flex-row justify-between items-center h-full pb-10">
        {/* Left: Contact Information */}
        <div className="w-1/4 text-xs mt-6">
          <h3 className="font-bold text-xl mb-2">Kontakt</h3>
          <p>📍 Lokacija: Pizzeria Wisa, 123 Pizza Street, Cityville</p>
          <p>📞 Telefon: +387 123 456 789</p>
          <p>📧 Email: info@pizzeriwisa.com</p>
          <h3 className="font-bold text-lg mt-6 mb-2">Radno vrijeme</h3>
          <p>Ponedjeljak - Petak: 10:00 - 22:00</p>
          <p>Subota - Nedjelja: 12:00 - 23:00</p>
        </div>

        {/* Right: Google Maps */}
        <div className="mt-6 w-1/3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.524556112917!2d-74.0060156846195!3d40.71277677933151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17b0c0af87%3A0x45c0c8d949b7d9ea!2sNew%20York%2C%20NY%2010020%2C%20USA!5e0!3m2!1sen!2s!4v1644812960535!5m2!1sen!2s"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex justify-center items-center gap-10 text-xs w-full py-3">
        <p className="cursor-pointer">© Pizzeria Wisa</p>
        <p className="cursor-pointer">Uslovi korištenja</p>
        <p className="cursor-pointer">Politika privatnosti</p>
      </div>
    </div>
  );
};

export default Footer;
