import styles from './TdsProff.module.css'
import { useState } from 'react'
import member3 from '../../Assets/AboutUs/Team_members/member3'
import Card from './Card/Card'

export default function TdsProff(){

    return (<>

        <div className={styles.wrapper}>
            <p className={styles.title}>TDS Professional</p>
            <p className={styles.details}>Talented team behind our success in all our projects. Dream your interior and
                <br/>our professional make your dream true</p>
            
            <div className={styles.parentDiv}>
              <Card image={member3} name={"Suresh Dugad"} role={"Site Foreman"}/>
              <Card image={member3} name={"Sanjana Bhandari"} role={"Lead Designer"}/>
              <Card image={member3} name={"Amey Bhandari"} role={"Manager & Web-Developer"}/>
            </div>
        </div>

    </>)
}