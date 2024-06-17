import React, {Component} from "react";
import { Fragment } from "react";
import Header from "./Header";
import './App.css'


class App extends Component{
   render() {
    return (
      <Fragment>
        <div>
        <Header></Header>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
        </div>
        </div>
      </Fragment>
      
    );
  }
}


export default App;
