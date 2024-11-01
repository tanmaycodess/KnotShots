import Styles from './Story.module.css';
import D1 from "/Intro/D1.jpg"
function Story() {
    return (
        <section className={Styles.section}>
            <h3 className={Styles.portfolio}>PORTFOLIO</h3>
            <h2 className={Styles.featured}>Featured Story</h2>
            <div className={Styles.container}>
                <div className={Styles.storyDetails}>
                    <h1 className={Styles.storyNumber}>01</h1>
                    <p className={Styles.storyTitle}>Ricardo & Michelle</p>
                    <p className={Styles.storyDescription}>Lorem ipsum dolor sit amet consecte Dignissim consectetur tristique purus vehicula felis velit.</p>
                </div>
                <img src={D1} alt="featured story img 1" className={Styles.storyImage} />
                <img src={D1} alt="featured story img 2" className={Styles.storyImage} />
            </div>
        </section>
    );
}

export default Story;
