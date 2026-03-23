import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed top-0 left-0 z-50 px-6 md:px-10 py-4 bg-black/40 backdrop-blur-md">

            <div className="flex items-center justify-between">

                {/* Logo */}
                <h1 className="logo-name text-[18px] md:text-[20px] xl:text-[24px] 3xl:text-[28px]">
                    Bean Scene
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-10 text-white common-text [&>li]:cursor-pointer
                                [&>li]:px-2 [&>li:hover]:text-[var(--btn-primary-hover)] [&>li:hover]:rounded-md">
                    <li>Home</li>
                    <li>Menu</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>

                {/* Right Side (Desktop) */}
                <div className="flex items-center gap-6">
                    <button className="text-white text-[16px] xl:text-[20x] 3xl:text-[22px] hover:text-yellow-400 cursor-pointer">
                        Sign In
                    </button>
                    <button className="cursor-pointer bg-[var(--btn-primary)] text-black px-5 py-1 rounded-full text-[16px] xl:text-[20x] 3xl:text-[22px] font-bold hover:bg-[var(--btn-primary-hover)] transition">
                        Sign Up
                    </button>
                    {/* Hamburger */}
                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✕" : "☰"}
                    </button>
                </div>


            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden gap-5 mt-5 flex flex-col text-white common-text [&>li]:cursor-pointer
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