import React, { useState } from 'react';
import styles from './Testimoni.module.css';
import D1 from '/Testimoni/D1.jpg';
import D2 from '/Testimoni/D1.jpg';
import D3 from '/Testimoni/D1.jpg';

const testimonials = [
    {
        quote: "Showcasing your Big Day in a Memorable & Unforgettable way.",
        clientName: "SARAH & LUKE",
        image: D1,
    },
    {
        quote: "A beautiful and unique experience captured perfectly!",
        clientName: "JAMES & LILY",
        image: D2,
    },
    {
        quote: "The attention to detail was amazing. Highly recommend!",
        clientName: "ANNA & MARK",
        image: D3,
    },
];

function Testimony() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className={styles.testimonySection}>
            <h3 className={styles.heading}>Client Testimonials</h3>
            <div className={styles.testimonialContainer}>
                <button onClick={prevTestimonial} className={styles.navButton}>&lt;</button>

                <div className={styles.testimonialCard}>
                    <blockquote className={styles.quote}>
                        <span className={styles.quoteIcon}>&ldquo;</span>
                        {currentTestimonial.quote}
                    </blockquote>
                    <p className={styles.clientName}>{currentTestimonial.clientName}</p>
                </div>

                <div className={styles.imageCard}>
                    <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.clientName}
                        className={styles.clientImage}
                    />
                </div>

                <button onClick={nextTestimonial} className={styles.navButton}>&gt;</button>
            </div>
        </section>
    );
}

export default Testimony;
