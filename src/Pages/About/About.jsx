import styles from './About.module.css'
import Header from '../../Component/Header/Header'
import image from '../../Assets/AboutUs/Header.jpeg'
import TdsProff from '../../Component/TdsProff/TdsProff'

export default function About(){
    return(<>
        <Header image={image} title={"AboutUs"}/>

        <div>
            <p className={styles.quote}>Your Home should tell the story of who you are, and be a collection of
               <br/> what you love.</p>
        </div>

        <TdsProff/>
    </>)
}