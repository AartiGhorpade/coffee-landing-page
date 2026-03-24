import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from './HomePages/HeroSection'
import DiscvoerCoffee from './HomePages/DiscvoerCoffee'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <DiscvoerCoffee />
        </>
    )
}

export default Home