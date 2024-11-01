import Styles from './Flims.module.css';
import D3 from '/photo4.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function Flims() {
    return (
        <>

            <Navbar />

            <div className={Styles.topImageContainer}>
                <img src={D3} alt="Top Banner" className={Styles.topImage} />
            </div>

            <section className={Styles.photographyPage}>
                {/* Pre-Wedding Section */}
                <div className={Styles.section}>
                    <h2 className={Styles.heading}>Pre-Wedding</h2>
                    <p className={Styles.description}>Capturing the excitement and joy before the big day.</p>
                    <div className={Styles.gallery}>
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/5j9eg6vGg5o"
                            title="Ring Ceremony Full Highlight | Cinematic Highlight 2022 | Visuals By Sanam"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>

                {/* Wedding Section */}
                <div className={Styles.section}>
                    <h2 className={Styles.heading}>Wedding</h2>
                    <p className={Styles.description}>Timeless moments from the most important day of your life.</p>
                    <div className={Styles.gallery}>
                        <iframe
                            width="853"
                            height="480"
                            src="https://www.youtube.com/embed/5j9eg6vGg5o"
                            title="Ring Ceremony Full Highlight | Cinematic Highlight 2022 | Visuals By Sanam"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>

                {/* Additional sections can be added in the same format */}
            </section >

            <Footer />
        </>
    )
}

export default Flims
