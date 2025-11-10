import React, { useRef } from 'react'
import './Testimonial.css'
import back_btn from '../../assets/back-icon.png'
import next_btn from '../../assets/next-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    let tx = 0;
    let slider = useRef();

    const forwardbtn = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const backwardbtn = () => {
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }

  return (
    <div className='testimonials'>
        <img src={next_btn} alt="" className='back-btn' onClick={forwardbtn}/>
        <img src={back_btn} alt="" className='next-btn' onClick={backwardbtn}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_1} alt="" />
                            <div className="name">
                                <h3>Emily Williams</h3>
                                <p>Edusity, USA</p>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_2} alt="" />
                            <div className="name">
                                <h3>William Jackson</h3>
                                <p>Edusity, USA</p>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_3} alt="" />
                            <div className="name">
                                <h3>Nina Williams</h3>
                                <p>Edusity, USA</p>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user_info">
                            <img src={user_4} alt="" />
                            <div className="name">
                                <h3>Robert Dowry</h3>
                                <p>Edusity, USA</p>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials