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
                <Link to="/">Home </Link>
                <Link to="">About</Link>
                <Link to="">Services</Link>
                <Link to="">Sites</Link>
                <Link to="">Contact</Link>
            </div>
        </div>

    </>)
}