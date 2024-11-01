import React from 'react';
import styles from './Contact.module.css';
import D1 from '/Testimoni/D1.jpg'; // Replace with actual path to the contact form image
import D2 from '/photo3.jpg'; // Replace with actual path to the background image
import D3 from '/photo4.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import email from '/overlay/email.svg';
import phone from '/overlay/phone.svg';
import location from '/overlay/location.svg';



const ContactPage = () => {
    return (
        <>
            <Navbar />

            {/* Top Image for Contact Form */}
            <div className={styles.topImageContainer}>
                <img src={D3} alt="Top Banner" className={styles.topImage} />
            </div>

            <div className={styles.contactPage}>
                <div className={styles.contactHeader}>
                    <h2>CONTACT</h2>
                    <h1>GET IN TOUCH</h1>
                </div>

                {/* Contact Form Section */}
                <div className={styles.contactContent}>
                    <div className={styles.contactForm}>
                        <form>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />

                            <label htmlFor="contact">Contact Number</label>
                            <input type="text" id="contact" name="contact" required />

                            <label htmlFor="date">Wedding / Event Date</label>
                            <input type="date" id="date" name="date" />

                            <label htmlFor="message">Tell me about yourself / event plan</label>
                            <textarea id="message" name="message" rows="4"></textarea>

                            <button className={styles.sbtn} type="submit">Submit</button>
                        </form>
                    </div>
                    <div className={styles.contactImage}>
                        <img src={D1} alt="Bride holding flowers" />
                    </div>
                </div>
            </div>

            {/* New Quote and Contact Information Section with Background Image */}
            <div className={styles.contactInfoSection}>
                <div className={styles.backgroundImage}>
                    <img src={D2} alt="Background with flowers" className={styles.background} />
                </div>

                <div className={styles.overlay}>
                    <div className={styles.infoCard}>
                        <img src={email} alt="Email Icon" className={styles.icon} />
                        {/* <h4 className='heading1'>EMAIL</h4> */}
                        <p>contact@yourdomain.com</p>
                    </div>
                    <div className={styles.infoCard}>
                        <img src={location} alt="Address Icon" className={styles.icon} />
                        {/* <h4 className='heading1'>ADDRESS</h4> */}
                        <p>1234 North Road Avenue,<br />Fresno CA 93722</p>
                    </div>
                    <div className={styles.infoCard}>
                        <img src={phone} alt="Contact Icon" className={styles.icon} />
                        {/* <h4 className='heading1'>CONTACT</h4> */}
                        <p>+1 987 213 5467</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ContactPage;
