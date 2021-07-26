import React from 'react'
import "./About.css"
// import ReactPlayer from 'react-player'

function About() {
    const visimisi = "Visi & Misi"
    const sertifikat = "Sertifikasi Perusahaan / ISO"
    
    // const readMore = () => {
    //   document.getElementById("detail__more1").style.display = "inline-block";
    //   document.getElementById("detail__more2").style.display = "inline-block";
    //   document.getElementById("readMore").style.display = "none";
    // }
    // const readLess = () => {
    //     document.getElementById("detail__more1").style.display = "none";
    //     document.getElementById("detail__more2").style.display = "none";
    //     document.getElementById("readMore").style.display = "inline-block";
    // }

    return (
        <div id="about" className='about'>
            <div className='about__container'>
                <img
                    className='about__item__img'
                    alt=""
                    src='/images/About.svg'
                />
            </div>
            <div className='about__text'>
                <div className="about__detail">
                Trah Singo Karyan memulai perjalanan dengan melakukan riset sejak tahun 2017 dengan tujuan agar dapat melakukan proses produksi botol kemasan E - Liquid yang memiliki kualitas prima.
                </div><div className="about__detail">
                Untuk dapat dengan segera memenuhi kebutuhan konsumen maka Trah Singo Karyan melakukan proses produksi botol kemasan E – Liquid di wilayah Jawa Barat, Kabupaten Bandung Barat.
                </div><div className="about__detail">
                Komitmen kami adalah mendorong pertumbuhan industry E – Liquid di Indonesia agar dapat tumbuh dan bersaing dalam pasar domestik maupun global.
                </div>
            </div>
            <div className='about__text'>
                <div className="about__header">{visimisi}</div>
                <div className="about__detail2">
                    Menjadi pemasok terbesar untuk kemasan dan bahan baku industri Vape di Indonesia dan pasar global.
                </div>
                <div className="about__detail2">
                    Trah Singo Karyan berkiprah dalam pasar lokal maupun global dengan melakukan berbagai inovasi maupun terobosan yang mengikuti tren dunia.
                </div>
                <div className="about__detail2">
                    Trah Singo Karyan sebagai pemasok besar selalu berkontribusi secara nyata dalam mendahulukan kebutuhan pemangku kepentingan dengan melakukan perbaikan yang berkelanjutan.
                </div>
            </div>
            {/* <div className="about__video">
                <img
                    className='about__image'
                    alt=""
                    src='images/img-3.svg'
                    />
            </div> */}
            <div className='about__text'>
                <div className="about__header">{sertifikat}</div>
                <div className="about__detail">
                Kepuasan pelanggan adalah tujuan utama kami, sehingga untuk itu kami melakukan berbagai upaya demi terwujudnya perbaikan yang berkelanjutan, antara lain;
                </div>
                <ul className="about__list">
                    <li>
                        Proses produksi kemasan dilakukan dengan memperhatikan dan mengikuti prosedur yang sesuai dengan 
                        <span className="list__highlight"> Food Safety Management System (FSSC) 22000 (version 4.1), Certification scheme for food safety management systems consisting of the following elements: ISO 22000:2005, ISO/TS 22002-4;2013 and additional FSSC 22000 requirements (version 4.1).</span><br/>             
                        ( Certificate No: FSM40221 dan FSM40238 )
                    </li>
                    <li>
                        Proses produksi ini juga dilakukan sesuai dengan pemenuhan terhadap persyaratan pada standar 
                        <span className="list__highlight"> ISO 14001:2015</span>, tentang <span className="list__highlight"> Environmental Management System.</span><br/>  
                        ( Certificate No: EMS41418 )
                    </li>
                    <li>
                        Dalam pemenuhan terhadap standar keselamatan kerja, proses produksi kemasan juga dilakukan sesuai dengan standar
                        <span className="list__highlight"> ISO 45001:2018, tentang Occupational health and safety management systems – Requirements with guidance for use.</span><br/>                   
                        ( Certificate No: HSM41356 )
                    </li>
                    <li>Sedangkan untuk menjamin kebutuhan konsumen, proses produksi kemasan juga telah dilengkapi dengan sertifikat halal dari MUI Indonesia. (Sertifikat halal No  01171069580312)</li>
                </ul>
            </div>
        </div>
    )
}

export default About
