import React, {Component} from "react";
import { Fragment } from "react";


class App extends Component{
   render() {
    return (
      <Fragment>
        <div>
        <div className="header">
          Phone Directory
        </div>
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
