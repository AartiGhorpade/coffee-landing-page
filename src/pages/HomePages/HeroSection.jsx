import React from 'react'
import heroImage from '../../assets/images/hero_coffee_image.png'
import Buttons from '../../components/Buttons'

const HeroSection = () => {
    return (
        <div className='relative bg-cover max-lg:bg-center text-white' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='absolute inset-0 bg-gradient-to-r from-[#1E1E1E] to-transparent'></div>
            <div className="relative md:grid grid-cols-2 z-10">
                <div className="pt-30 pb-20 md:pt-42 px-6 md:px-10">
                    <p className="common-text">We’ve got your morning covered with</p>
                    <p className="logo-name text-[100px] md:text-[120px] xl:text-[140px] 3xl:text-[200px]">Coffee</p>
                    <p className="common-text md:w-[80%]">It is best to start your day with a cup of coffee. Discover the
                        best flavours coffee you will ever have. We provide the best
                        for our customers.</p>

                    <Buttons classes="mt-6 cursor-pointer bg-[var(--btn-primary)] text-black px-5 py-1 rounded-full text-[16px] xl:text-[20x] 3xl:text-[22px] font-bold hover:bg-[var(--btn-primary-hover)] transition" btnName="Order Now" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection