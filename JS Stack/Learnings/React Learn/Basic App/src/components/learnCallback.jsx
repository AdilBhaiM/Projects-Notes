import {useCallback, useContext, useEffect, useMemo, useState} from 'react';
import { Set_The_Num } from './firstcom';

export const Firstcom = () => {

  const [count, setCount] = useState(0);

  const settheCount = ()=>{
    setCount(count+1);
  }

  const [num, setNum] = useState(0);

  const settheNum = useCallback(()=>{
    setNum(num+1);
  }, [num])
  
  return (
    <>
      <Set_The_Num MyNum={num} setMyNum={settheNum}/>
      <hr />
      <h1>My Count : {count}</h1>
      <button onClick={settheCount}>Add the Count Value</button>
    </>
  )
}