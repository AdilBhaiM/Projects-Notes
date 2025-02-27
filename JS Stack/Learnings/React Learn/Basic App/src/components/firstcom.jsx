// import {useEffect, useMemo, useState} from 'react';

import { memo } from "react"

export const Set_The_Num = memo(({MyNum, setMyNum}) => {
  console.log("I am doing my code for num");

  // const [count, setCount] = useState(0);
  // const settheCount = ()=>{
  //   setCount(count+1);
  // }

  // const [num, setNum] = useState(0);

  // const setMyNum = () => {
  //   setNum(num+1);
  // }

  // useEffect(()=>{
  //   console.log("this is an effect");
  // }, [])

  // useEffect(()=>{
  //   console.log("this is an effect");
  //   return ()=>{
  //     console.log("this is the function for refreshing the data calls");
  //   }
  // }, [])

  // const checkNum = useMemo(()=>{
  //   console.log("I am checking the numValue of it is 8");
  //   if(num == 8){
  //     return "Yes";
  //   }else{
  //     return "No"
  //   }
  // }, [num])
 /* <button onClick= {(e)=>{settheCount(count+1);}}>Click to add Count</button>
  <h1>My count.:  {count}</h1>
  <button onClick= {(e)=>{setMyNum(count+1);}}>Click to add Num</button>
  <h1>My Num :  {num} -- Is Ten? -- {checkNum}</h1> */

  return (
    <>
        <h1>Num : {MyNum}</h1>
        <button onClick={setMyNum}>Click to Num</button>
    </>
  )

})