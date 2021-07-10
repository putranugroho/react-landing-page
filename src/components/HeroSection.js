import React from 'react'
import '../App.css'
// import { Button } from './Button'
import "./HeroSection.css"

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='/videos/video-4.mp4' autoPlay loop muted />
            <div className="title-container">
                <h1>We are Trah Singo Karyan</h1>
                <h1>We Might be small but we also</h1>
                <h1>Known as the biggest supliers</h1>
                <p>Made in Indonesia professional Custom</p>
            </div>
            {/* <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">WATCH TRAILER<i className="far fa-play-circle"/></Button>
            </div> */}
        </div>
    )
}

export default HeroSection
