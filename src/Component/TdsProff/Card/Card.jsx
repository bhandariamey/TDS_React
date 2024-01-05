import styles from './Card.module.css'
export default function Card({image, name, role}){
    return(<>
         <div className={styles.individual}>
            <img src={image} className={styles.image} alt={name}/>
            <p className={styles.name}> {name}</p>
            <p className={styles.role}> {role}</p>
        </div>
    </>)
}