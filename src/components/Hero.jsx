import React from "react";
import { MapPin, ForkKnife } from "lucide-react";

const Hero = () => {
  return (
    <div
      className="flex justify-between items-center flex-col h-[70vh] bg-cover bg-center w-screen mb-30"
      style={{ backgroundImage: `url(assets/herobackground.png)` }}
    >
      <p
        className="font-black text-white text-[55px] mt-25 rounded-2xl"
        style={{ textShadow: "2px 5px 8px rgba(0, 0, 0, 0.8)" }}
      >
        Picerija Wisa – Savršenstvo Ukusa u Svakom Zalogaju!
      </p>

      <div className="text-center mt-8 px-10 py-6 rounded-2xl mb-100 bg-black/70">
        <p className="text-white text-xl">
          Pozovite nas na broj:{" "}
          <span className="font-bold text-white text-xl">
            +387 61 205 605 ili +387 62 805 205
          </span>
        </p>
        <p className="text-white text-md mt-2 font-semibold">
          Radno vrijeme: od ponedjeljka do subote, od 9:00 do 22:00. Dostava na
          vaša vrata u roku od 30 minuta!
        </p>

        <div className="flex justify-center items-center gap-10 mt-10">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center gap-3 w-[130px] bg-orange-600 h-fit py-2 px-4 text-white font-semibold rounded-xl text-md hover:scale-104 transition-transform duration-300"
          >
            Menu
            <ForkKnife className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-center items-center gap-3 w-[130px] bg-orange-600 h-fit py-2 px-4 text-white font-semibold rounded-xl text-md hover:scale-104 transition-transform duration-300"
          >
            Lokacija
            <MapPin className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
