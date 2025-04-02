import React from "react";

const Hero = () => {
  return (
    <div
      className="flex justify-between items-center flex-col h-[70vh] bg-cover bg-center w-screen mb-30"
      style={{ backgroundImage: `url(assets/herobackground.png)` }}
    >
      <p
        className="font-black text-white text-[55px] mt-25 rounded-2xl"
        style={{ textShadow: "2px 8px 10px rgba(0, 0, 0, 0.8)" }}
      >
        Picerija Wisa – Savršenstvo Ukusa u Svakom Zalogaju!
      </p>

      <div className="text-center mt-8 px-10 py-6 rounded-2xl mb-100 bg-black/70">
        <p className="text-white text-lg">
          Pozovite nas na broj:{" "}
          <span className="font-bold text-white">+387 61 205 605 ili +387 62 805 205</span>
        </p>
        <p className="text-white text-md mt-2">
          Otvoreni svakim danom od 10:00 do 22:00. Dostava na vaša vrata u roku
          od 30 minuta!
        </p>
      </div>
    </div>
  );
};

export default Hero;
