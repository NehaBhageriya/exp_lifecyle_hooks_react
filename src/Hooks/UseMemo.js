


import React,{useMemo} from 'react'

const UseMemo = () => {
    const [i,setCount]=UseState(0)
    const changeHandler=()=>{
setCount(i+1)
    }
    const MemoChild=useMemo(()=>{
        return <Child/>
    })
  return (
    <div>
        {i}
        <button onClick={changeHandler}>increment</button>
        <h3>normal render </h3>
        {/* <Child/> */}
        {MemoChild}
    </div>
  )
}

export default UseMemo