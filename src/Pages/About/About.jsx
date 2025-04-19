import "./About.scss"
import Header from '../../Component/Header/Header'
import image from '../../Assets/AboutUs/Header.jpeg'
import TdsProff from '../../Component/TdsProff/TdsProff'
import Quote from "../../Assets/Icons/Quote"
import TimeLine from "../../Component/TimeLine/TimeLines"

export default function About(){
    return(<>
        <Header image={image} title={"About Us"}/>
        <div className="quote">
            <Quote/>
            <span>There are three responses to a piece of design – yes, no, and WOW!</span>
            <span>' Wow is the one we aim for '</span>
        </div>
        <TimeLine/>
        <TdsProff/>
    </>)
}