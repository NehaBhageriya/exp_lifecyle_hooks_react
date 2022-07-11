
import React, { useState,useRef ,useEffect} from 'react'


const Reference = () => {
    const [inputValue,setInputValue]=useState("")
const previousValue=useRef("")
useEffect(() => {
 previousValue.current=inputValue
},[inputValue])
  return (
    <>
    <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
    <h2>previous value:{previousValue.current}</h2>
    <h2>current  value:{inputValue}</h2>

    </>
  )
}

export default Reference