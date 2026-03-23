import React from 'react'
import heroImage from '../assets/images/hero_coffee_image.png'

const HeroSection = () => {
    return (
        <div className='relative bg-cover max-lg:bg-center h-screen text-white' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className='absolute inset-0 bg-gradient-to-r from-[#1E1E1E] to-transparent'></div>
            <div className="relative md:grid grid-cols-2 z-10">
                <div className="pt-30 md:pt-50 px-6 md:px-10">
                    <p className="common-text">We’ve got your morning covered with</p>
                    <p className="logo-name text-[100px] md:text-[120px] xl:text-[140px] 3xl:text-[200px]">Coffee</p>
                    <p className="common-text md:w-[80%]">It is best to start your day with a cup of coffee. Discover the
                        best flavours coffee you will ever have. We provide the best
                        for our customers.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection