import styles from './Hero.module.css'
import HeroImage from '../../Assets/heroImage.jpg'
import HeroService from '../HeroService/HeroService'

export default function Hero(){
    return(<>
        <div className = {styles.Wrapper}>
            <img className = {styles.heroImage} src={HeroImage} alt="Hero"/>
            <p className={styles.heroTitle}>Let's Elevate Your Living Experience</p>
            <p className={styles.herobody}>Unlocking Possibilities through Visionary Design: Elevating Spaces
            with Ingenuity, Precision, and Passion.</p>
        </div>

        <HeroService/>

        </>)
}