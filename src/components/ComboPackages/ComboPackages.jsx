import React from "react";
import ComboPackageContainer from "./components/ComboPackageContainer";
import { motion } from "framer-motion";

const FadeInSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      {children}
    </motion.div>
  );
};

const ComboPackages = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-gradient-to-b from-[#f3274c] via-[#d82042] to-[#b71837] w-screen pt-10 pb-30 gap-16 select-none px-10">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-6 mb-4">
          <p className="font-bold sm:text-lg text-sm text-white" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>Akcijska Ponuda</p>
          <p className="bg-black text-white sm:text-lg text-xs py-1 px-4 rounded-xl font-bold">
            -13%
          </p>
        </div>
        <FadeInSection>
          <h5 className="text-white font-black sm:text-5xl text-2xl mb-3" style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)" }}>COMBO PAKETI</h5>
        </FadeInSection>
        <div className="flex justify-center items-center flex-row gap-6">
          <p className="font-bold sm:text-lg text-sm bg-white rounded-xl py-1 px-6 text-[#222222]">
            Srednja Pizza + Sok + Palačinak
          </p>
        </div>
      </div>
      <ComboPackageContainer />
    </div>
  );
};

export default ComboPackages;
