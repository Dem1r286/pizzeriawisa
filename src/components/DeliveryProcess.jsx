import React from "react";
import { motion } from "framer-motion";

const DeliveryProcess = () => {
  const stages = [
    { text: "Naručite pozivom ili preko Glovo / Korpa", imageUrl: "/src/assets/DeliveryProcessIcons/phone.png" },
    { text: "Potvrdite narudžbu", imageUrl: "/src/assets/DeliveryProcessIcons/orderconfirmation.png" },
    { text: "Naši brzi dostavljači su na putu", imageUrl: "/src/assets/DeliveryProcessIcons/deliveryvan.png" },
    { text: "Primite dostavu i uživajte!", imageUrl: "/src/assets/DeliveryProcessIcons/pizzabox.png" }
  ];

  return (
    <div className="flex justify-center items-center w-screen flex-col">
      <div className="flex justify-center items-center flex-col mb-20">
        <p className="font-black text-[#F3274C] text-xl">EKSPRESNA DOSTAVA</p>
        <p className="font-bold text-5xl text-[#222222] mt-2">BRZO I JEDNOSTAVNO</p>
        <p className="w-[70%] text-center mt-3">
          Proces dostave je brz i efikasan, ali može varirati u zavisnosti od trenutne gužve u gradu.
          Ipak, u prosjeku, cijeli proces traje oko 20 minuta, od narudžbe do isporuke – jednostavno i pouzdano!
        </p>
      </div>

      <div className="flex justify-between items-center gap-40 mb-14">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <img src={stage.imageUrl} alt={`Stage ${index + 1}`} className="w-16 h-16" />
            <p className="text-[#222222] text-[15px] text-center font-bold pb-2">{stage.text}</p>
            <img src="/src/assets/DeliveryProcessIcons/deliverybar.svg" alt="" className="w-50" />
          </div>
        ))}
      </div>

      {/* Scooter Animation Container */}
      <div className="relative w-full overflow-hidden">
        {/* Scooter */}
        <motion.img
          src="/src/assets/DeliveryProcessIcons/scooterdelivery.png"
          alt="Scooter"
          className="w-32 md:w-40"
          initial={{ x: "-200px" }}
          animate={{
            x: ["-200px", "50vw", "100vw"], // Move across the full screen
          }}
          transition={{
            x: { repeat: Infinity, repeatType: "loop", duration: 5, ease: [0.4, 0, 0.2, 1] }, // Faster in middle
          }}
        />
      </div>
    </div>
  );
};

export default DeliveryProcess;
