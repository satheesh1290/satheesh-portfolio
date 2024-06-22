import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.highlight}>Satheeshkumar</span>
        </h1>
        <p className={styles.description}>
          I'm a Fontend Developer with hands on frontend framework experience.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:satheesh1290@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.heroImg}>
        <img src={getImageUrl("hero/heroImage.png")} alt="Me" />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
