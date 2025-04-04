import React, { useState } from "react";
import { Link } from 'react-router-dom'; 
import Menu from "../../Menu";

const HeaderLinks = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className="hidden lg:flex justify-center items-center mr-16">
                <div className="flex items-center gap-20 text-[#22222] text-lg">
                    <p className="cursor-pointer">Početna</p>

                    <Link to="/menu" className="cursor-pointer">
                        Menu
                    </Link>

                    <p className="cursor-pointer">Lokacija</p>
                    <p className="cursor-pointer">Kontakt</p>
                </div>
            </div>
            {isMenuOpen && <Menu handleMenuToggle={handleMenuToggle} />}
        </div>
    );
};

export default HeaderLinks;
