import React from 'react'
import "./About.css"
import ReactPlayer from 'react-player'

function About() {
    const visimisi = "Visi & Misi"
    const sertifikat = "Sertifikasi Perusahaan / ISO"

    return (
        <div id="about" className='about'>
            <div className='about__container'>
                <img
                    className='about__item__img'
                    alt=""
                    src='/images/banner-singo.svg'
                />
                <div>
                <p>EST</p>
                <p>2017</p>
                </div>
            </div>
            <div className='about__text'>
                <div className="about__detail">
                    <h1>T</h1>rah Singo karyan memulai perjalanan dengan melakukan riset sejak tahun 2017 untuk memproduksi botol kemasan E - Liquid (cairan rokok elektrik) yang memiliki kualitas terbaik dan dapat memenuhi kebutuhan konsumen.
                </div><div className="about__detail">
                    Diproduksi di Indonesia, tepatnya di wilayah Jawa Barat, Kota Cimahi, Kabupaten Bandung Barat - Trah Singo Karyan berdiri pada Februari tahun 2020 dengan komitmen untuk membantu menumbuhkan industri e-liquid di Indonesia agar dapat tumbuh dan bersaing dalam pasar domestik maupun global.
                </div>
            </div>
            <div className='about__text'>
                <div className="about__visi_misi">{visimisi}</div>
                <div className="about__detail">
                    <h1>T</h1>rah Singo Karyan berusaha berperan sebagai supplier terbesar di Indonesia untuk memenuhi 50% dari kebutuhan kemasan industri vape. Menyesuaikannya sambil berkontribusi dengan kebutuhan pasar lokal tanpa menutup kemungkinan membuat serangkaian inovasi atau terobosan yang mengikuti pergerakan di kancah Internasi- onal dalm industri e-liquid.
                </div>
            </div>
            <div className="about__video">
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=NUYvbT6vTPs'
                    width='100%'
                    height='100%'
                    />
                </div>
                <div className="about__detail">
                    <div className="about__sertifikat">{sertifikat}</div>
                    <h1>K</h1>emasan yang diproduksi oleh Trah Singo Karyan yang bekerja sama dengan Perusahaan Sindoplast di- fabrikasi dan diproduksi dengan mesin tercanggih untuk memberikan kualitas terbaik dan terdaftar pada sistem operasional yang telah memiliki sertifikat resmi bernomor ISO 14001(2015), Sertifikat FSSC 22000, serta Sertifikat ISO 45001 (2018), dan juga sudah bersertifikasi MUI halal. Dengan adanya sertifikasi ini, sistem standar internasional tentu dilaksanakan sebaik mungkin oleh Trah Singo Karyan. Agar sistem manajemen mutu yang digunakan mengukur mutu organisasi, kredibilitas untuk bersaing secara global.
                    Bersaing positif dengan dinamika kompetisi pasar saat ini, sertifikat ISO yang dimiliki Trah Singo Karyan menjamin kualitas dari produk dan jasa yang ditawarkan, serta menguatkan kepercayaan konsumen. Sehingga setiap produk yang dipercaya- kan kepada Trah Singo Karyan, akan dihasilkan dengan ketepatan, kualitas, dan jaminan terbaik .
                    Penerapan sertifikat ISO pada Trah Singo Karyan, tentu menjadi pedoman opera- sional perusahaan yang bergantung pada sistem, bukan perorangan. Selain daripada hal tersebut, ISO yang dipegang oleh Trah Singo Karyan menjadi acuan kerja agar setiap karyawan yang bekerja – minus dari kesalahan baik tekni maupun non teknis. Sederhananya, meminimalisir kesalahan kerja yang berdampak pada kurangnya jaminan kualitas produk dan Sebagai bukti pelaksanaan sistem dan diperlukan untuk telusur ketika terjadi masalah.
                </div>
            </div>
        </div>
    )
}

export default About
