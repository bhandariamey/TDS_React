import styles from './Footer.module.css'
import {ReactComponent as Whatsapp} from '../../Assets/SocialMedia/whatsappIcon.svg'
import {ReactComponent as Instagram} from '../../Assets/SocialMedia/instagramLogo.svg'
import {ReactComponent as LinkedIn} from '../../Assets/SocialMedia/linkedinIcon.svg'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(<>
    <div className={styles.wrapper}>
        <div className={styles.heading}>Contact Us</div>
        <div className={styles.address}>Flat no. 104 : Vrundavan Apartments, Near Golden Wheel Hotel,<br/>
            Indian Oil Petrol Pump Lane, Navi Peth, Pune, Maharashtra 411030
        </div>
        <div className={styles.email}>sanjana@thedesignspell.com</div>
        <div className={styles.contact}>(+91) 90750-40505</div>
        <div className={styles.socialMedia}>
            <Link target="_blank" to="https://api.whatsapp.com/message/VPMG4ROHK5IMD1?autoload=1&app_absent=0"><Whatsapp/></Link>
            <Link target="_blank" to="https://www.instagram.com/thedesignspell/"><Instagram/></Link>
            <Link target="_blank" to="https://www.linkedin.com/in/sanjana-dugad-5330a2144/"><LinkedIn/></Link>
        </div>
    </div>
    </>)
}