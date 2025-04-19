import './Footer.scss'
import { ReactComponent as Whatsapp } from '../../Assets/SocialMedia/whatsappIcon.svg'
import { ReactComponent as Instagram } from '../../Assets/SocialMedia/instagramLogo.svg'
import { ReactComponent as LinkedIn } from '../../Assets/SocialMedia/linkedinIcon.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (<>
        <div className="wrapper">
            <span className="heading">Contact Us</span>
            <a className="address" target='_blank' href="https://www.google.com/maps/dir//FVV5%2BP46,+Pune+-+Satara+Road+opp+Saibaba+temple,+near+Panchami+Hotel,+Pune,+Maharashtra+411009/@18.4942686,73.7753506,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2c01a6e474ee5:0xfacb280798aa4ea9!2m2!1d73.8577523!2d18.4942864?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">
                Flat No. 1305, Kumar Surabhi Apt, Opp. Sai Temple<br />
                Satara Road, Pune, Maharashtra 411009
            </a>
            <a className="email" href="mailto:sanjana@thedesignspell.com">sanjana@thedesignspell.com</a>
            <span className="contact">(+91) 90750-40505</span>
            <div className="socialMedia">
                <Link target="_blank" to="https://api.whatsapp.com/message/VPMG4ROHK5IMD1?autoload=1&app_absent=0"><Whatsapp /></Link>
                <Link target="_blank" to="https://www.instagram.com/thedesignspell/"><Instagram /></Link>
                <Link target="_blank" to="https://www.linkedin.com/in/sanjana-dugad-5330a2144/"><LinkedIn /></Link>
            </div>
        </div>
    </>)
}


export default Footer;