import React from 'react'
import HeroSection from './HomePages/HeroSection'
import DiscvoerCoffee from './HomePages/DiscvoerCoffee'
import NewBlends from './HomePages/NewBlends'
import WhyWe from './HomePages/WhyWe'
import GetChance from './HomePages/GetChance'
import Subscribe from './HomePages/Subscribe'
import Feedback from './HomePages/Feedback'

const Home = () => {
    return (
        <>
            <HeroSection />
            <DiscvoerCoffee />
            <NewBlends />
            <WhyWe />
            <GetChance />
            <Feedback />
            <Subscribe />
        </>
    )
}

export default Home