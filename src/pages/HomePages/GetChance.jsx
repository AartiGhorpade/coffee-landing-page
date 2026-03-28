import React from 'react';
import Buttons from '../../components/Buttons';
import bgImage from '../../assets/images/subscribe-bg.png';
import coffeeCup from '../../assets/images/big-coffee-cup.png';
import coffeeBeans from '../../assets/images/coffee_beans.png';

const GetChance = () => {
    return (
        <section
            className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20 overflow-hidden"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="z-10 max-w-xl text-left text-white md:pr-10">
                <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-4">
                    Get a chance to have an <br />
                    <span className="text-[var(--btn-primary)]">Amazing morning</span>
                </h2>
                <p className="mb-6 common-text text-white/90">
                    We are giving you a one time opportunity to experience a better life with coffee.
                </p>
                <Buttons
                    classes="bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] text-black font-semibold px-6 py-2 rounded-full transition text-base md:text-lg shadow-lg"
                    btnName="Order Now"
                />
            </div>
            <div className="z-10 mt-10 md:mt-0 md:w-1/3 flex md:justify-center">
                <img
                    src={coffeeCup}
                    alt="Coffee Cup"
                    className="w-48 md:w-64 xl:w-80 drop-shadow-2xl"
                />
            </div>
            {/* Overlay for darkening the background for better text contrast */}
            {/* <div className="absolute inset-0 bg-[#f8b365]/70 pointer-events-none" /> */}

            <div className="absolute -bottom-[18px] -right-[18px] mb-4 mr-4">
                <img
                    src={coffeeBeans}
                    alt="Coffee Beans"
                    className=""
                />
            </div>
        </section>
    );
};

export default GetChance;
