
import { useAtom } from 'jotai'
import { counterAtom } from '../atom/atomCounter'
const Counter = () => {
    const [counter,setCounter]=useAtom(counterAtom)
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        <h2 style={{marginLeft:"7rem"}}>{counter}</h2>
      <button style={{height:"3rem",width:"15rem"}} onClick={()=>setCounter(counter+1)}>INCREMENT</button>
      <button style={{height:"3rem",width:"15rem"}} onClick={()=>setCounter(0)}>RESET</button>
      <button style={{height:"3rem",width:"15rem"}} onClick={()=>setCounter(counter-1)}>DECREMENT</button>
      </div>
    </div>
  )
}

export default Counter
