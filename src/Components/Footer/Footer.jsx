import React from 'react';
import Styles from './Footer.module.css';
import facebook from '/footer/facebook.svg';
import instagram from '/footer/instagram.svg';
import youtube from '/footer/youtube.svg';
import flowerunderline from '/footer/FlowerUnderline.svg';

function Footer() {

    const currentYear = new Date().getFullYear(); 


    return (
        <section className={Styles.section}>
            {/* Navigation Links and "KnotShots" Heading */}
            <div className={Styles.footerTop}>
                <nav className={Styles.navLinks}>
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#services">SERVICES</a>
                </nav>

                <h1 className={Styles.logo}>KnotShots</h1>

                <nav className={Styles.navLinks}>
                    <a href="#portfolio">PORTFOLIO</a>
                    <a href="#blog">BLOG</a>
                    <a href="#contact">CONTACT</a>
                </nav>
            </div>

            {/* Catch Phrase with Underline */}
            <p className={Styles.catchPhrase}>
                “Life’s Beautiful Moments, <span>Captured with Care.”</span>
            </p>
            <img src={flowerunderline} alt="Flower Underline" className={Styles.flowerUnderline} />

            {/* Social Media Icons */}
            <div className={Styles.iconContainer}>
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Instagram" />
                <img src={youtube} alt="YouTube" />
            </div>

            {/* Copyright */}
            <p className={Styles.copyright}>Copyright {currentYear} All Rights Reserved</p>
            <p className={Styles.copyright}>~by PixcelWise</p>

        </section>
    );
}

export default Footer;
