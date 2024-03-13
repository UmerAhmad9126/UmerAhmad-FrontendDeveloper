import React from 'react'
import "../styles/Footer.css"
import FooterImg from "../assets/Frame 1790.png"
import twitter from "../assets/Vector.svg"
import email from "../assets/clarity_email-solid.svg"
import telegram from "../assets/icon-telegram.3e7b16fc68b2a61fe78c02f92f7a45f6.svg.svg"




const Footer = () => {
    return (
        <div className='footer-container'>

            <div>
                <img src={FooterImg} alt="FooterImg" className='footer-img' />
            </div>

            <div className='sitemap'>
                <p>SITEMAP</p>
            </div>

            <div className='footer-link'>
                <p>Home</p>
                <p>IDO</p>
                <p>Tokennomics</p>
                <p>Road Map</p>
                <p>White Paper</p>
                <p>Pledge</p>
                <p>NFT</p>
                <p>Games</p>
            </div>

            <div className='social'>
                <img src={twitter} alt="twitter" />
                <img src={telegram} alt="telegram" />
                <img src={email} alt="email" />
            </div>
        </div>
    )
}

export default Footer