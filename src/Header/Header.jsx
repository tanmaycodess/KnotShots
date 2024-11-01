import React, { useState } from "react";
import styles from "./Header.module.css";
import video from "/Header_Video1.mp4";
import Navbar from "../Components/Navbar/Navbar";
function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <Navbar navbarStyle="navbar-light" />

            <div className={styles.video}>
                <video src={video} autoPlay loop muted preload="none" />
            </div>
        </header>
    );
}

export default Header;
