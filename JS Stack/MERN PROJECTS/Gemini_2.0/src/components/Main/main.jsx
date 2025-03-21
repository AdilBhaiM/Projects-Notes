import React, { useContext } from 'react'
import {assets} from '../../assets/assets.js';
import './main.css'
import { context } from '../../context/context.jsx';

export const Main = () => {
    const {
        input,
        runChat,
        setInput,
        showresult,
        recentPrompt,
        prevPrompt,
        loading,
        resultData,
        setprevPrompt,
        setRecentPrompt
    } = useContext(context)
    // console.log(input);
    return (
        <div className="main">

            {/* NavBar ----------------------------------------  */}          
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            {/* Section ----------------------------------------  */} 
            <div className="section">
                {!showresult
                ? <>
                    <div className="head_text">
                        <p className='hello'>Hello, Dev.</p>
                        <p>How can I help you today</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p className='card_text'>Suggest beautiful places to see on an upcoming road trip</p>
                            <img src={assets.compass_icon} alt="" />
                        </div>
                        <div className="card">
                            <p className='card_text'>Briefly summarize this concept: urban planning</p>
                            <img src={assets.bulb_icon} alt="" />
                        </div>
                        <div className="card">
                            <p className='card_text'>Brainstorm team bonding activities for our work retreat</p>
                            <img src={assets.message_icon} alt="" />
                        </div>
                        <div className="card">
                            <p className='card_text'>Improve the readability of the following code</p>
                            <img src={assets.code_icon} alt="" />
                        </div>
                    </div>
                </>:
                    <div className="result_main">
                        <div className="user_prompt">
                            <p>{recentPrompt}</p>
                            <img src={assets.user_icon} alt="" />
                        </div>
                        <div className="response">
                            <img src={assets.gemini_icon} alt="" />
                            {loading?
                                <div className="loader">
                                    <div className="line1 line"></div>
                                    <div className="line2 line"></div>
                                    <div className="line3 line"></div>
                                    <div className="line4 line"></div>
                                </div>
                            :
                                <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                            }
                        </div>
                    </div>
                }
                <div className="input_box">
                  <input type="text" placeholder='Enter Your Prompt here...' value={input} onChange={(e)=>{setInput(e.target.value)}}/>
                  <img src={assets.gallery_icon} alt="" />
                  <img src={assets.mic_icon} alt="" />
                  <img className='send_icon' onClick={()=>{runChat(input)}} src={assets.send_icon} alt="" />
                </div>
            </div>
        </div>
    )
}
