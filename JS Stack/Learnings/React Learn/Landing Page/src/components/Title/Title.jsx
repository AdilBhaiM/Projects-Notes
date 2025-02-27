import React from 'react'
// import btnImg from '../../assets/dark-arrow.png'
import './Title.css'

const Title = ({title, subTitle}) => {
  return (
    <div className="texts">
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title