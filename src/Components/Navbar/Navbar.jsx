import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

function Navbar({ navbarStyle, color }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight * 1.00) { // 1vh in pixels
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg ${styles[navbarStyle]} ${scrolled ? styles.scrolled : ""} navbar-dark`}
            style={{ color: color }}
            id={styles.navbar}
        >
            <a className="navbar-brand" id={styles.brand_name} href="#">Knot Shots</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav" id={styles.navbar_buttons}>
                    <li className="nav-item active">
                        <a className="nav-link" id={styles.nav_link} href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id={styles.nav_link} href="/gallery">PHOTOGRAPHY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id={styles.nav_link} href="#">FILMS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id={styles.nav_link} href="/contact">CONTACT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
