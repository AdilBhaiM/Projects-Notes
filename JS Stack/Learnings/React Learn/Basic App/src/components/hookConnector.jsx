import React from 'react'
import { myFirstHook } from '../hooks/myFirstHook'
import context from '../config/context'
import { useContext } from 'react'


export const HookConnector = () => {
    const mycontext = useContext(context)
    const {num, settingNum} = myFirstHook()
    return (
      <div>
          <h1>My Num : {num}</h1>
          <button onClick={settingNum}>Add the num Up for {mycontext.name} studying in {mycontext.class} class</button>
      </div>
    )
}
