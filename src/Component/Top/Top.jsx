import styles from './Top.module.css'
import {Button} from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';

export default function Top(){

    const handleClick = ()=>{
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }

    return(
        <>
           <div className={styles.button}>
           <Button variant="outlined" onClick={handleClick}><NavigationIcon/></Button> 
           </div>
        </>
    )
}