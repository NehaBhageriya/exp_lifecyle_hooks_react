//usestate it allow us to track state in functional components 
//it is replacement for state in class components 

// import React, { Component } from 'react'

// export default class UseState extends Component {
//     constructor(props){
//         super(props)
//         this.state={count:0}
//     }
//   render() {
//     return (
//       <div>
//           <div>Ypu clicked{this.state.count}</div>
//           <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
//       </div>
//     )
//   }
// }


import React, { useState } from 'react'

const UseState = () => {
const [Detail,setDetails]=useState({
    Name:"neha",
    age:25,
    batch:"feb"
})
 const updateBatch=()=>{
setDetails({...Detail,batch:"march"})
}
  return (<>
    <div>my name is {Detail.Name} age is {Detail.age} and batch is {Detail.batch}</div>
    <button onClick={updateBatch}>change batch </button></>
  )
}

export default UseState