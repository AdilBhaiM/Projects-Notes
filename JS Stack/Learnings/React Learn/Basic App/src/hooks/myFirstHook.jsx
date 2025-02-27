import { useState } from "react"

export const myFirstHook = () => {
    const [num, setNum] = useState(0);
    const settingNum = ()=>{
        setNum(num+1)
    }
    return {num, settingNum}
}