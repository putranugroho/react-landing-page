import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="company__address">
                <p>Trah Singo Karyan</p>
                <b>Jl. Karapitan No.5, Komp Apartement Grand Asia Afrika Ruko Kob/1 Paledang, Kec. Lengkong, Kota Bandung, Jawa Barat 40261 - Indonesia</b>
                <p>costumercare@singo.id</p>
                <p>(+62)823-2048-2946, (+62)823-2048-2948</p>
            </div>
            <div className="sosmed__icon">
                <p>Stay Connected with Us</p>
                <div className='sosmed__wrapper'>
                    <div className="sosmed__images">
                        <img
                        className='sosmed__image'
                        alt=""
                        src='images/instagram.svg'
                        />
                        <img
                        className='sosmed__image'
                        alt=""
                        src='images/facebook.svg'
                        />
                        <img
                        className='sosmed__image'
                        alt=""
                        src='images/twitter.svg'
                        />
                        <img
                        className='sosmed__image'
                        alt=""
                        src='images/whatsapp.svg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
