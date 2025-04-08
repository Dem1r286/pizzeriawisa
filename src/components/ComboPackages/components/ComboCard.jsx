import React from "react";

const ComboCard = ({ imageSrc }) => {
    return (
        <div className="flex justify-center sm:flex-row flex-col items-center bg-white max-w-[400px] max-h-[500px] rounded-2xl shadow-md hover:scale-104 transition-transform duration-300">
            <div className="w-full h-full">
                <img src={imageSrc} className="w-full h-full object-cover rounded-2xl" />
            </div>
        </div>
    );
};

export default ComboCard;
