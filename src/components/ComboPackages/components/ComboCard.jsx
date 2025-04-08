import React from "react";

const ComboCard = ({ imageSrc }) => {
    return (
        <div className="flex justify-center sm:flex-row flex-col items-center bg-white 
        w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[350px] md:h-[350px]  xl:w-[400px] xl:h-[400px]  max-w-[450px] max-h-[450px]
        rounded-2xl shadow-md hover:scale-104 transition-transform duration-300">
            <div className="w-full h-full">
                <img src={imageSrc} className="w-full h-full object-cover rounded-2xl" />
            </div>
        </div>
    );
};

export default ComboCard;
