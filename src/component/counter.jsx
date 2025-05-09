import React from 'react'
import { useAtom } from 'jotai'
import { counterAtom } from '../atom/atomCounter'
const Counter = () => {
    const [counter,setCounter]=useAtom(counterAtom)
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={()=>setCounter(counter+1)}>INCREMENT</button>
      <button onClick={()=>setCounter(0)}>RESET</button>
      <button onClick={()=>setCounter(counter-1)}>DECREMENT</button>
    </div>
  )
}

export default Counter
