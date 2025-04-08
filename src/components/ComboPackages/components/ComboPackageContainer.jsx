import React from "react";
import ComboCard from "./ComboCard";
import { motion } from "framer-motion";


const FadeInSection = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};


const ComboPackageContainer = () => {
  return (
<div className="flex justify-center items-center flex-col md:flex-row flex-wrap gap-[8vw] sm:gap-20">
      <FadeInSection delay={0.2}>
        <ComboCard
          imageSrc="/assets/combos/combo1.webp"
        />
      </FadeInSection>
      <FadeInSection delay={0.4}>
        <ComboCard
          imageSrc="/assets/combos/combo2.webp"

        />
      </FadeInSection>
      <FadeInSection delay={0.6}>
        <ComboCard
          imageSrc="/assets/combos/combo3.webp"
        />
      </FadeInSection>
    </div>
  );
};

export default ComboPackageContainer;
