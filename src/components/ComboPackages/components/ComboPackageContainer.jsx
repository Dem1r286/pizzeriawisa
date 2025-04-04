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
    <div className="flex justify-center items-center flex-row flex-wrap gap-[3vw]">
      <FadeInSection delay={0.2}>
        <ComboCard
          imageSrc="/assets/combopizza.webp"
          title="COMBO 1"
          description="Margherita, Funghi"
          price="11KM"
        />
      </FadeInSection>
      <FadeInSection delay={0.4}>
        <ComboCard
          imageSrc="/assets/ImageGallery/pizza2.webp"
          title="COMBO 2"
          description="Capricciosa, Sarajevo, Vegeteriana, Al Tonno"
          price="12KM"
        />
      </FadeInSection>
      <FadeInSection delay={0.6}>
        <ComboCard
          imageSrc="/assets/ImageGallery/pizza3.webp"
          title="COMBO 3"
          description="Wisa, Bosanska, Mexicana, Piletina, Doner Pizza, Quattro Formagio"
          price="13KM"
        />
      </FadeInSection>
    </div>
  );
};

export default ComboPackageContainer;
