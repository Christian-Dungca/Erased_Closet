import React from 'react';
import styles from './About.module.scss';

const About = () => {
    return (
        <div className={styles.About}>
            <div className={styles.leftContainer}>
                <div className={styles.imgContainer}> About Section Image Container </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.textContainer}> About Section Text Container </div>
            </div>
        </div>
    )
}

export default About;