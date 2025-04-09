import React from "react";
import { motion } from "framer-motion";

const DeliveryProcess = () => {
  const stages = [
    {
      text: "Naručite pozivom ili preko Glovo / Korpa",
      imageUrl: "assets/DeliveryProcessIcons/phone.webp",
    },
    {
      text: "Potvrdite narudžbu",
      imageUrl: "assets/DeliveryProcessIcons/orderconfirmation.webp",
    },
    {
      text: "Naši brzi dostavljači su na putu",
      imageUrl: "assets/DeliveryProcessIcons/deliveryvan.webp",
    },
    {
      text: "Primite dostavu i uživajte!",
      imageUrl: "assets/DeliveryProcessIcons/pizzabox.webp",
    },
  ];

  return (
    <div className="flex justify-center items-center w-screen flex-col">
      <div className="flex justify-center items-center flex-col mb-20">
        <p className="font-black text-[#F3274C] sm:text-xl text-xs text-center">EKSPRESNA DOSTAVA</p>
        <p className="font-bold sm:text-5xl text-2xl text-[#222222] mt-2 text-center">
          BRZO I JEDNOSTAVNO
        </p>
        <p className="w-[70%] text-center mt-3 text-xs sm:text-base">
          Proces dostave je brz i efikasan, ali može varirati u zavisnosti od
          trenutne gužve u gradu. Ipak, u prosjeku, cijeli proces traje oko
          20-30 minuta, od narudžbe do isporuke – jednostavno i pouzdano!
        </p>
      </div>

      <div className="flex justify-center items-center gap-20 2xl:gap-30 mb-30 px-20 flex-wrap">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center gap-3">
            <img
              src={stage.imageUrl}
              alt={`Stage ${index + 1}`}
              className="w-16 h-16"
            />
            <p className="text-[#222222] sm:text-[15px] text-[12px] text-center font-bold pb-2">
              {stage.text}
            </p>
            <img
              src="assets/DeliveryProcessIcons/deliverybar.webp"
              alt=""
              className="w-50"
            />
          </div>
        ))}
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.img
          src="assets/DeliveryProcessIcons/scooterdelivery.webp"
          alt="Scooter"
          className="w-28 md:w-40"
          initial={{ x: "-200px", opacity: 1 }}
          animate={{
            x: ["-200px", "30vw", "30vw", "100vw"],
          }}
          transition={{
            x: {
              times: [0, 0.4, 0.5, 1],
              repeat: Infinity,
              repeatType: "loop",
              duration: 3,
              ease: ["easeOut", "linear", "easeIn"],
            },
            opacity: {
              times: [0, 0.4, 0.5, 1],
              duration: 3,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            },
          }}
        />
      </div>
    </div>
  );
};

export default DeliveryProcess;