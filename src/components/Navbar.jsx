import React, { useState } from "react";
import Buttons from "./Buttons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 px-6 py-4 md:px-10 bg-black/40 backdrop-blur-md">

            <div className="flex items-center justify-between">

                {/* Logo */}
                <p className="logo-name text-[22px] md:text-[26px] xl:text-[30px] 3xl:text-[32px]">
                    Bean Scene
                </p>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-10 text-white common-text [&>li]:cursor-pointer
                                [&>li]:px-2 [&>li:hover]:text-[var(--btn-primary-hover)] [&>li:hover]:rounded-md">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>

                {/* Right Side (Desktop) */}
                <div className="flex items-center gap-6">
                    <Buttons classes="text-white text-[16px] xl:text-[20x] 3xl:text-[22px] hover:text-[var(--btn-primary-hover)] cursor-pointer" btnName="Sign In" />
                    <Buttons classes="cursor-pointer bg-[var(--btn-primary)] text-black px-5 py-1 rounded-full text-[16px] xl:text-[20x] 3xl:text-[22px] font-bold hover:bg-[var(--btn-primary-hover)] transition" btnName="Sign Up" />
                    {/* Hamburger */}
                    <button
                        className="lg:hidden text-white text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>


            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="lg:hidden gap-5 mt-5 flex flex-col text-white common-text [&>li]:cursor-pointer
                                [&>li]:px-2 [&>li:hover]:text-[var(--btn-primary-hover)] [&>li:hover]:rounded-md">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;