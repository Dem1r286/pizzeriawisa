import React from "react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Loader = () => {
    const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-6">
      <motion.div
        className="w-12 h-12 border-4 border-t-transparent border-red-500 rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <div className="text-center">
        <div className="text-lg font-medium">Učitava se...</div>
         {showMessage && (
        <p className="text-gray-500 mt-4 text-center">
          Nešto nije uredu. Molimo pokušajte ponovo.
        </p>
      )}
      </div>
    </div>
  );
};

export default Loader;
