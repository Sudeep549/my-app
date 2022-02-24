import React, { Component } from "react";
import "./sheet.css";


export class ClassCompo extends Component{
  render(){
    const Css_Inline={
      color:"blueviolet",
      fontSize:"20px"
    }
  
  return(
    <div id="child-element01">
      <h1>This is created using Class Component</h1>
      <p id="Css_External">This is done using External CSS</p>
      <p style={Css_Inline}>This is done using Inline CSS</p>
    </div>
    )
  }
}



