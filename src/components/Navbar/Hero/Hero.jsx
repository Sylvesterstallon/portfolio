import { getImageUrl } from "../../../utils";
import styles from "./Hero.module.css";



export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}
        > 
            <h1 className={styles.title}>Hi, im Ada</h1>
            <p className={styles.description}>Im a full-stack developer with 5years of experience using react and NodeJS. Reach out if you`d like to learn more!</p>
            <a href="mailto:oluogusylvester@email.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="hero image of me" className={styles.heroImg}/>
        <div className={styles.topBlur}/> 
        <div className={styles.bottomBlur}/> 
    </section>
}
