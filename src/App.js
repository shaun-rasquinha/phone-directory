import React, {Component} from "react";
import { Fragment } from "react";
import Header from "./Header";


class App extends Component{
   render() {
    return (
      <Fragment>
        <div>
        <Header></Header>
        <button>
          Add
        </button>
        <div>
          <span>Name </span>
          <span>Phone </span>
        </div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="Type here" defaultValue={"Shilpa"}></input>
        </div>
      </Fragment>
      
    );
  }
}


export default App;
