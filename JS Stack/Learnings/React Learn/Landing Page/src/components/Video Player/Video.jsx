import React from 'react'
import './Video.css'
import myvideo from '../../assets/car-video.mp4'

const Video = ({video, setVideo}) => {
  return (
    <div className={`video ${video? "" : "pause"}`} onClick={()=>{setVideo(prev=>!prev)}}>
        <video src={video?myvideo:""} autoPlay muted controls></video>
    </div>
  )
}

export default Video