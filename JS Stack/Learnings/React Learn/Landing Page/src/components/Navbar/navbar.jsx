import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import './navbar.css'

const navbar = () => {
  let collapse_menu = useRef();
  const [dark, setDark] = useState(false);
  const [collapse, setCollapse] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setDark(true) : setDark(false)
      // console.log(window.scrollY);
    })
  },[])

  useEffect(() => {
    if(collapse == true){
      collapse_menu.current.style.right = "-250px"
    }else{
      collapse_menu.current.style.right = "0"
    }
  }, [collapse])
  


  return (
    <div className={`navbar ${dark ? 'dark-nav' : ''}`}>
        <img src={logo} alt=""/>
        <div className="nav_btns" ref={collapse_menu}>
            <div className="links">
                {/* <Link rel="stylesheet" href="" /> */}
                <Link to='hero' smooth='true' offset={-200} duration={500} className='link'>Home</Link>
                <Link to='programs' smooth='true' offset={-200} duration={500} className='link'>Program</Link>
                <Link to='about' smooth='true' offset={-200} duration={500} className='link'>About Us</Link>
                <Link to='gallery' smooth='true' offset={-200} duration={500} className='link'>Campus</Link>
                <Link to='testimonials' smooth='true' offset={-200} duration={500} className='link'>Testimonials</Link>
            </div>
            <Link to='contact' smooth='true' offset={200} duration={500}><button>Contact Us</button></Link>
            <img src={menu_icon} alt="" className='menu_icon'  onClick={()=>{setCollapse(prev=>!prev)}}/>
            {/* <button>Contact Us</button> */}
        </div>
    </div>
  )
}

export default navbar