import React, {Component} from "react";
import { Fragment } from "react";
import Header from "./Header";
import './App.css'


class App extends Component{
   render() {

    let subscriber = [
      {
        id: 1,
        name: "Shilpa Bhat",
        phone: "8888888888"
      },
      {
        id: 2,
        name: "Srishti",
        phone: "9999999999"
      }
    ]
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
          {
            subscriber.map(sub =>{
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>

              </div>
            })
          }
        </div>
        </div>
      </Fragment>
      
    );
  }
}


export default App;
