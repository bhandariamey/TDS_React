import "./Navbar.scss"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import logo from "../../Assets/Icons/logo.svg";
import Hamburger from "../../Assets/Icons/hamBurger.svg";

const Navbar = () =>{
  const [showHamMenu, setShowHamMenu] = useState(false);
  const pages = ['Home','Sites', 'About', 'Contact','Services'];

  useEffect(()=>{
    window.addEventListener("resize",handleScreenSizeChange);
    return () => {
      window.removeEventListener("resize",handleScreenSizeChange);
    }
  },[])

  const handleScreenSizeChange= () => {                  
    if(window.innerWidth > 900){        
      setShowHamMenu(false);
    }
  }
  const handleHamburgerClick = () => {
    setShowHamMenu(!showHamMenu);
  }
  return (
   <>
    <div className="nav-wrapper">
      <Link to="/" className="brandName">
        <img src={logo} alt="logo" className="logo" /> 
        <span>The Design Spell</span>
      </Link>
      <div className="navLinks">
        {pages.map((page, index) => {
          return <Link key={index} to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} className="navLink">{page}</Link>
        })}</div>
      <button className="hamburgerBtn" onClick={handleHamburgerClick}>
        <img src={Hamburger} alt="hamburger button" className="hamburgerIcon" />
      </button>
    </div>

    {
      showHamMenu && <div className="hamMenu">
          {pages.map((page, index) => {
            return <Link onClick={() => setShowHamMenu(false)} key={index} to={page === 'Home' ? '/' : `/${page.toLowerCase()}`} className="hamLink">{page}</Link>
          })}
      </div>
    }
   </>
    )
}

export default Navbar;