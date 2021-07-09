import React from 'react'
import '../App.css'
import HeroSection from './HeroSection'
import About from './About'
import CardsBottle from './CardsBottle'
import CardsCap from './CardsCap'
import SocialMedia from './SocialMedia'
import ContactUs from './ContactUs'
import Footer from './Footer'

function Home() {
    return(
        <>
            <HeroSection/>
            <About/>
            <CardsBottle />
            <CardsCap/>
            <SocialMedia/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home