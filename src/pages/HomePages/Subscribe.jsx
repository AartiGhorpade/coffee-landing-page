import React from 'react'
import bgImage from '../../assets/images/subscribe-bg.png';

const Subscribe = () => {
    return (
        <section
            className="relative w-full px-6 md:px-16 py-12 md:py-20 overflow-hidden max-md:mt-20"
            style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >

            <div className='text-center'>
                <h2 className="font-bold text-3xl md:text-4xl xl:text-5xl leading-tight mb-4 text-white">
                    Subscribe to get the Latest News
                </h2>
                <p className="mb-6 common-text text-white/90">
                    Don’t miss out on our latest news, updates, tips and special offers. Subscribe to our newsletter and stay connected with us.
                </p>
            </div>
            <form className="flex w-full max-w-xl mx-auto rounded-lg overflow-hidden shadow-md bg-white/90 mt-10">
                <input
                    type="email"
                    placeholder="Enter your mail"
                    className="flex-1 px-4 py-3 outline-none text-[16px] bg-transparent"
                    style={{ minWidth: 0 }}
                />
                <button
                    type="submit"
                    className="px-4 sm:px-8 py-3 font-semibold text-black bg-[var(--btn-primary)] hover:bg-[var(--btn-primary-hover)] transition-colors duration-200"
                >
                    Subscribe
                </button>
            </form>
        </section>
    )
}

export default Subscribe