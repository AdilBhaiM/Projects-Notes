import {createContext, useState} from 'react';
import run from '../config/gemini';

export const context = createContext();

const State = (props)=>{

    const [input, setInput] = useState("")
    const [showresult, setShowresult] = useState(false)
    const [recentPrompt, setRecentPrompt] = useState("")
    const [prevPrompt, setprevPrompt] = useState([])
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayEffect = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev=>prev+nextWord);
        }, 45*index);
    }

    const newChat = () => {
        setResultData("")
        setRecentPrompt("")
        setInput('')
        setLoading(false)
        setShowresult(false)
    }

    const runHistory = async (input) => {
        setResultData("")
        setRecentPrompt(input)
        setInput('')
        setLoading(true)
        setShowresult(true)
        const Response = await run(input);
        let responseArray = Response.split("**")
        let newResponse;
        for(let i=0; i < responseArray.length; i++)
        {
            if (i === 0 || i%2 !== 1) {
                newResponse += responseArray[i]
            }else{
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let updatedResponse = newResponse.split("*").join("</br>")
        let promptResult =  updatedResponse.split(" ")
        for(let i = 0; i < promptResult.length; i++)
        {
            let newWord = promptResult[i]
            delayEffect(i, newWord+" ")
        }
        setLoading(false)
    }


    const runChat = async (input) => {
        setResultData("")
        setRecentPrompt(input)
        setInput('')
        setLoading(true)
        setShowresult(true)
        setprevPrompt(prev=>[...prev,input])
        const Response = await run(input);
        let responseArray = Response.split("**")
        let newResponse;
        for(let i=0; i < responseArray.length; i++)
        {
            if (i === 0 || i%2 !== 1) {
                newResponse += responseArray[i]
            }else{
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let updatedResponse = newResponse.split("*").join("</br>")
        let promptResult =  updatedResponse.split(" ")
        for(let i = 0; i < promptResult.length; i++)
        {
            let newWord = promptResult[i]
            delayEffect(i, newWord+" ")
        }
        setLoading(false)
    }

    const allStates = {
        input,
        runChat,
        setInput,
        showresult,
        newChat,
        runHistory,
        recentPrompt,
        prevPrompt,
        loading,
        resultData,
        setprevPrompt,
        setRecentPrompt
    }
    
    // runChat("what is the color of my shoes")

    return(
        <context.Provider value={allStates}>
            {props.children}
        </context.Provider>
    )
}

export default State