import styles from './Tackle.module.css'
import {Button} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function Tackle(){
    return(<>
    
    <div className={styles.wrapper}>
        <div className={styles.left}>
            <div className={styles.title}>We Tackle The Most Challenging Designs</div>
            <div className={styles.desc}>The world needs innovators and problem solvers who turn challenges into greater opportunities. We have an insatiable curiosity about transformative trends challenging the status.</div>
            <div className={styles.button}>
            <Button variant="contained" endIcon={<SendIcon />}>
                Plan A Meet
            </Button>
            </div>
        </div>
        
        <div className={styles.right}>
            <img src="https://thedesignspell.netlify.app/photos/Most%20challenging.JPG" alt="" />
        </div>
    </div>

    </>)
}