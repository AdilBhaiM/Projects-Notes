import React from 'react'
import btnImg from '../../assets/dark-arrow.png'
import './hero.css'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_text">
        <h1>We Ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'><p>Explore more </p><img src={btnImg} alt=''/></button>
      </div>
        {/* <img src={HeroImg} alt="" /> */}
    </div>
  )
}

export default Hero