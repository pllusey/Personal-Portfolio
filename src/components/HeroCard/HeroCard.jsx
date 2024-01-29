import styles from './HeroCard.module.css';

export const HeroCard = () => {
    return(
        <div className={styles.HeroCard}>
            <img src="../../assets/headshot-photo-1.jpeg" className={styles.Headshot}/>
        </div>
    )
}
