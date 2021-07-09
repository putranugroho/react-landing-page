import React from 'react'
import './ContactUs.css'

function ContactUs() {
    return (
        <div className="contact__us">
            <div className="text">Sign up to receive product news and updates</div>
            <form className="form">
                <input className="form__input" placeholder="Your Name"/>
                <input className="form__input" placeholder="Phone Number"/>
                <input className="form__input" placeholder="Your Email"/>
                <button className="form__button">Sign Up</button>
            </form>
            <div className="text">We respect your privacy.</div>
        </div>
    )
}

export default ContactUs
