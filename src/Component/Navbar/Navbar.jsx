import styles from './Navbar.module.css'
import {ReactComponent as Logo} from '../../Assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(<>

        <div className={styles.Wrapper}>
            
            <Link to="/" className={styles.brandName}>
                <Logo/>
                <div>The design spell</div>
            </Link>
            
            <div className={styles.navLinks}>
                <Link to="/" className={styles.navItems}>Home </Link>
                <Link to="/about"  className={styles.navItems}>About</Link>
                <Link to=""  className={styles.navItems}>Services</Link>
                <Link to=""  className={styles.navItems}>Sites</Link>
                <Link to=""  className={styles.navItems}>Contact</Link>
            </div>
        </div>

    </>)
}