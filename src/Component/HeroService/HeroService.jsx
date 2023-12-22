import styles from './HeroService.module.css'
export default function HeroService(){
    return(<>

        <div className={styles.Wrapper}>
            <div className={styles.heroServiceCard}>
                <p className={styles.title}>Interior Design</p>
                <p className={styles.desc}>An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical.</p>

            </div>
            <div className={styles.heroServiceCard}>
                <p className={styles.title}>Interior Design</p>
                <p className={styles.desc}>An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical.</p>

            </div>
            <div className={styles.heroServiceCard}>
                <p className={styles.title}>Interior Design</p>
                <p className={styles.desc}>An interior designer transforms spaces by harmonizing aesthetics and functionality, making your domain both beautiful and practical.</p>

            </div>

        </div>

    </>)
}