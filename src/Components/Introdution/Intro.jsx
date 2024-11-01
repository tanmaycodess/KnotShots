import styles from "./Intro.module.css"
import flower from '/flower.svg'
import D3 from '/Intro/D3.jpg';
import White_box from '/Intro/White_box.svg';
function Intro() {
    return (
        <section className={styles.Intro}>
            <div className={styles.container_intro}>
                <img className={styles.flower} src={flower} alt="" />
                <h1 className={styles.intro_text}>
                    Showcasing your big day in a memorable<br />
                    <span className={styles.breakLine}> and unforgettable way.</span>
                </h1>
            </div>
            <div className={styles.image_container} >
                <img className={styles.main_img} src={D3} alt="" />
                <img className={styles.White_box} src={White_box} alt="" />
            </div>
        </section >
    );
}

export default Intro;

