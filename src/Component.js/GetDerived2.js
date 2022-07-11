import React, { Component } from 'react'

export default class GetDerived2 extends Component {
    constructor(props){
        super(props)
        this.state={favColor : "red"}
        console.log("constructor");
        console.log("red");
    }
    static getDerivedStateFromProps(props,state){
        console.log("yellow");
        return {favColor:props.changeColor}
    }changeColor=()=>{

        this.setState({favColor:"blue"})
        console.log("blue")
        
        }
          render() {
            return (
                <>
              <div>My fav color is {this.state.favColor}</div>
              <button onClick={this.changeColor}>Blue</button>
              </>
            )
          }
        }