import React from 'react'
import '../App.css'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div id="home" className="hero-container">
            {/* <video src='/videos/video-4.mp4' autoPlay loop muted /> */}
            <img
              className='hero__image'
              alt=""
              src='images/banner_flat_blue 1.svg'
            />
            {/* <div className="title-container">
                <h1>We are Trah Singo Karyan</h1>
                <h1>We Might be small but we also</h1>
                <h1>Known as the biggest supliers</h1>
                <p>Made in Indonesia professional Custom</p>
            </div> */}
        </div>
    )
}

export default HeroSection
