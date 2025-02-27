import React from 'react'
import './Program.css'
import Card1 from '../../assets/program-1.png'
import Card2 from '../../assets/program-2.png'
import Card3 from '../../assets/program-3.png'
import Cardi1 from '../../assets/program-icon-1.png'
import Cardi2 from '../../assets/program-icon-2.png'
import Cardi3 from '../../assets/program-icon-3.png'

const Program = () => {
  return (
    <div className="programs">
        <div className="cards">
            <div className="card1 card">
                <img src={Card1} alt="" />
                <div className="hovered">
                    <img src={Cardi1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="card2 card">
                <img src={Card2} alt="" />
                <div className="hovered">
                    <img src={Cardi2} alt="" />
                    <p>Masters Degree</p>
                </div>
            </div>
            <div className="card3 card">
                <img src={Card3} alt="" />
                <div className="hovered">
                    <img src={Cardi3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Program