import React from "react";

const DeliveryProcess = () => {
  const stages = [
    {text: "Naručite telefonom ili preko aplikacija Glovo ili Korpa", imageUrl: "/src/assets/DeliveryProcessIcons/phone.png"},
    {text: "Potvrdite narudžbu",  imageUrl: "/src/assets/DeliveryProcessIcons/orderconfirmation.png"},
    {text: "Naš brzi dostavljači su na putu",  imageUrl: "/src/assets/DeliveryProcessIcons/deliveryvan.png"},
    {text: "Primite dostavu i uživajte!",  imageUrl: "/src/assets/DeliveryProcessIcons/pizzabox.png"}
  ];

  return (
    <div className="flex justify-center items-center w-screen flex-col">
      <div className="flex justify-center items-center flex-col mb-20">
        <p className="font-bold text-[#F3274C] text-xl">EKSPRESNA DOSTAVA</p>
        <p className="font-bold text-5xl text-[#222222] mt-2">
          BRZO I JEDNOSTAVNO
        </p>
        <p className="w-[70%] text-center mt-3">
          Proces dostave je brz i efikasan, ali može varirati u zavisnosti od
          trenutne gužve u gradu. Ipak, u prosjeku, cijeli proces traje oko 20
          minuta, od narudžbe do isporuke – jednostavno i pouzdano!
        </p>
      </div>

      <div className="flex justify-between items-center gap-40 mb-10">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col items-center gap-3">        
            <img src={stage.imageUrl} alt={`Stage ${index + 1}`} className="w-16 h-16" />
            <p className="text-[#222222] text-[15px] text-center font-bold">
              {index === 0 ? (
                <>
                  Naručite telefonom ili <br /> preko aplikacija Glovo ili Korpa
                </>
              ) : (
                stage.text
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-end items-center w-1/2">
        <img src="/src/assets/DeliveryProcessIcons/scooterdelivery.svg" alt="" className="w-60" />
      </div>
    </div>
  );
};

export default DeliveryProcess;
