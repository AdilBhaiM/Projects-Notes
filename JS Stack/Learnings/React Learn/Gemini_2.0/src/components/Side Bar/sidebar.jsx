import React, { useContext, useState } from 'react'
import './sidebar.css';
import {assets} from '../../assets/assets';
import { context } from '../../context/context.jsx';

const Sidebar = () => {
    const [extend, setExtend] = useState(true)
    // const contextValue = useContext(context)
    const {prevPrompt, runChat, newChat, runHistory} = useContext(context)
    return (
        <div className="sidebar_main" style={{width: extend? '300px' : '100px'}}>
            {/* Header ------------------------------------------ */}
            <div className="header">
                <img style={{cursor: 'pointer', marginLeft: "24px"}} onClick={()=>{setExtend(prev=>!prev)}} src={assets.menu_icon} alt="" />
                <div className="btn" onClick={newChat}>
                    <img src={assets.plus_icon} alt="" />
                    {extend?<p className='btn_txt'>New Chat</p>:null}
                </div>
            </div>

            {/* Section ---------------------------------------- */}
                <div className="chats_main">
                    {extend?<h2 className='heading_txt'>All Chats</h2>:null}
                    <div className="All_chats">
                        {prevPrompt.map((item, index)=>{
                            return (
                                <div className="chats" onClick={()=>{runHistory(item)}}>
                                    <img className='chats_icon' src={assets.message_icon} alt="" />
                                    {extend?<p className='Chats_txt'>{item.slice(0, 20)} ...</p>:null}
                                </div>
                            )
                        })}
                        {/* <div className="chats">
                            <img className='chats_icon' src={assets.message_icon} alt="" />
                            {extend?<p className='Chats_txt'>What is react...</p>:null}
                        </div> */}
                    </div>
                </div>

            {/* Footer Btns ----------------------------------------  */}
            <div className="footer">
                <div className="btn_foot">
                    <img id='foot_img' src={assets.question_icon} alt="" />
                    {/* {extend?<p className='btn_txt'>Help</p>:null} */}
                    <p className='btn_txt'>{extend?"Help":null}</p>
                </div>
                <div className="btn_foot">
                    <img id='foot_img' src={assets.history_icon} alt="" />
                    {/* {extend?<p className='btn_txt'>Your history</p>:null} */}
                    <p className='btn_txt'>{extend?"Your history":null}</p>
                </div>
                <div className="btn_foot">
                    <img id='foot_img' src={assets.setting_icon} alt="" />
                    <p className='btn_txt'>{extend?"Settings":null}</p>
                    {/* {extend?<p className='btn_txt'>Settings</p>:null} */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar