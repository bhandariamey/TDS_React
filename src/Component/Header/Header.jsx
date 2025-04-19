import styles from './Header.module.css'

export default function Header({image, title}){
    return(<>
        <div className={styles.wrapper}>
        <img className={styles.image} src={image} alt="Header Image" />
        <p className={styles.title}>{title}</p>
        </div>
    </>)
}