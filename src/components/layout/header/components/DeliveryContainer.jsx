import React from "react";

const deliverySteps = [
  { icon: "📞", text: "Naručite telefonom ili preko aplikacija Glovo ili Korpa" },
  { icon: "✅", text: "Potvrdite narudžbu" },
  { icon: "🚴‍♂️", text: "Naši brzi dostavljači su na putu" },
  { icon: "📦", text: "Primite dostavu i uživajte!" },
];

const DeliveryProcess = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold text-gray-800">EKSPRESNA DOSTAVA</h2>
      <p className="text-gray-600 mb-4">BRZO I JEDNOSTAVNO</p>
      <p className="text-sm text-gray-500 mb-6">
        Efikasna i pouzdana dostava, u prosjeku 20 minuta od narudžbe, 
        zavisno o trenutnom prometu u gradu.
      </p>
      <div className="space-y-4">
        {deliverySteps.map((step, index) => (
          <div key={index} className="flex items-center justify-start gap-3 p-4 bg-white shadow-md rounded-lg">
            <span className="text-2xl">{step.icon}</span>
            <p className="text-gray-700">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryProcess;
