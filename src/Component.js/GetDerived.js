import React, { Component } from 'react'

export default class GetDerived extends Component {
    constructor(props){
        super(props)
        this.state={favColor : "red"}
        console.log("constructor");
    }
    static getDerivedStateFromProps(props,state){
        return {favColor:props.changeColor}
    }
  render() {
     console.log("render");
    return (
      <div>my favourite color is {this.state.favColor}</div>
    )
  }
}
