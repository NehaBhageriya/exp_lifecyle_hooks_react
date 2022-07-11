//useeffeect allows you to create sideeffects in your components 
//it wiill accept two arguments the second argument is optional 
//first is function and seconfd is dependency (optional )

import React, { useEffect ,useState} from 'react'

const UseEffect = () => {
    const [count,setCount]=useState(0)
    const [multiplication,setMultiplication]=useState()
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         // setCount((count)=>count+1)

    //     },5000);//times is no need 
    // },[])//without dependency([]) it goes for infinite 

    useEffect(()=>{
        setTimeout(()=>{
            setMultiplication(()=>count*2)

        });//times is no need 
    },[count])
  return (
    <div><h1>
        have render {count} times 
    </h1>
<button onClick={()=>setCount((c)=>c+1)}>render count</button>
calculation:{multiplication}
    </div>
  )
}

export default UseEffect