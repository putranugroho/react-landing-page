import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="company__address">
                <div className="address__header">Trah Singo Karyan</div>
                <div className="address__detail">Jl. Karapitan No.5, Komp Apartement Grand Asia Afrika Ruko Kob/1 Paledang, Kec. Lengkong, Kota Bandung, Jawa Barat 40261 - Indonesia</div>
                <div>costumercare@singo.id</div>
                <div>(+62)812-3001-3012, (+62)821-300-80-80-6</div>
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
