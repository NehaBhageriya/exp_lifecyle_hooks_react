import React, { useEffect } from 'react'

const Child = () => {
    let count=0;
    useEffect(()=>{
        count++;
    })
  return (
    <div>renderd the child count :{count}</div>
  )
}

export default Child