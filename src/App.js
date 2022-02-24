import React, { Component } from "react";
import Style from "./App.module.css";
import "./sheet.css";
import { FunctionalCompo } from "./FunctionalCompo";
import { ClassCompo } from "./ClassCompo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      classClick: false,
      funClick: false,
    };
  }

  render() {
    console.log(this);
    return (
      <div>
        <p class="header">Styling using Functional and Class Component</p>
        <div className={Style.tap_button}>
          <button
            id={Style.Func_Button}
            class={Style.Button}
            onClick={() => this.setState({ funClick: !this.state.funClick })}
          >
            TO SEE STYLING IN FUNCTIONAL COMPONENT
          </button>

          <button
            id={Style.Class_Button}
            class={Style.Button}
            onClick={() =>
              this.setState({ classClick: !this.state.classClick })
            }
          >
            TO SEE STYLING IN CLASS COMPONENT
          </button>
        </div>
        <div Style="display: flex; width:90vw; height:76vh;">
          {this.state.funClick?<FunctionalCompo/>:null}
          {this.state.classClick?<ClassCompo/>:null}
        </div>
      </div>
    );
  }
}

export default App;
