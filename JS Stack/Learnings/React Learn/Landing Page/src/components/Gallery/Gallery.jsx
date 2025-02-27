
import React from 'react'
import './Gallery.css'
import Card1 from '../../assets/gallery-1.png'
import Card2 from '../../assets/gallery-2.png'
import Card3 from '../../assets/gallery-3.png'
import Card4 from '../../assets/gallery-4.png'
import btnImg from '../../assets/white-arrow.png'

const Gallery = () => {
  return (
        <div className="gallery">
            <div className="photos">
                <div className="photo">
                    <img src={Card1} alt="" />
                </div>
                <div className="photo">
                    <img src={Card2} alt="" />
                </div>
                <div className="photo">
                    <img src={Card3} alt="" />
                </div>
                <div className="photo">
                    <img src={Card4} alt="" />
                </div>
            </div>
            <button className='more'><p>Explore more </p><img src={btnImg} alt=''/></button>
        </div>
  )
}

export default Gallery