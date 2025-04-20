import "./Hero.scss"
import HeroImage from '../../Assets/heroImage.jpg'
import HeroService from '../HeroService/HeroService'

export default function Hero(){
    return(<>
        <div className = "hero-wrapper">
            <img className = "heroImage" src={HeroImage} alt="Hero"/>
            <span className="heroTitle">Let's Elevate Your Living Experience</span>
            <span className="herobody">Unlocking Possibilities through Visionary Design: Elevating Spaces
            with Ingenuity, Precision, and Passion.</span>
        </div>
        <HeroService/>
        </>)
}