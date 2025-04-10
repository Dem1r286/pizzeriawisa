import React from "react";

const ComboCard = ({ imageSrc }) => {
    return (
        <div className="flex justify-center sm:flex-row flex-col items-center bg-white 
        w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] max-w-[450px] max-h-[450px]
        rounded-2xl shadow-md hover:scale-104 transition-transform duration-300">
            <div className="w-full h-full">
                <img src={imageSrc} className="w-full h-full object-cover rounded-2xl" alt="Combo Paketi"/>
            </div>
        </div>
    );
};

export default ComboCard;
