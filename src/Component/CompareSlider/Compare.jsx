// import styles from './Compare.module.css'
import { useState } from 'react'
import './Compare.css'
import {Slider} from '@mui/material-next';

export default function Compare(){

    const [fgwidth, setFgWidth] = useState() 

    const handleChange = (e)=>{
        setFgWidth(e.target.value)
        const fg = document.querySelector('.foreground-img');
          fg.style.width = `${fgwidth}%`;
    }

    return(<>
       <div className="Wrapper">
        <p className="sliderTitle">With <span style={{color:'#121212'}}>The Design Spell</span>, transforming your space is as smooth an experience as sliding this bar</p>
        <div className='container'>
                <div className='img background-img'></div>
                <div className='img foreground-img'></div>
                <div className={"Slider"}>
                    <Slider max={100} min={1} defaultValue={50} onChange={handleChange} sx={{color: "#AAAAAA"}}/>
                    </div>
            </div>
       </div>

    </>)
}