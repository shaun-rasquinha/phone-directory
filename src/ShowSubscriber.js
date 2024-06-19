import React, {Component} from "react";
import { Fragment } from "react";
import Header from "./Header";
import './ShowSubscriber.css';
import { Link } from 'react-router-dom';

// let subscriber = [
    //   {
    //     id: 1,
    //     name: "Shilpa Bhat",
    //     phone: "8888888888"
    //   },
    //   {
    //     id: 2,
    //     name: "Srishti",
    //     phone: "9999999999"
    //   }
    // ]

class ShowSubscriber extends Component{


    onDeletedClick = (subscriberId) => {
    this.props.deleteSubscriberHandler(subscriberId); 
  }

   render() {
    return (
      <Fragment>
        <div>
        <Header heading="Phone Directory"></Header>
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>
          <Link to="/add">
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
          {
            this.props.subscribersList.map(sub =>{
              return <div key={sub.id} className="grid-container">
                <span className="grid-item">{sub.name}</span>
                <span className="grid-item">{sub.phone}</span>
                <span className="grid-item action-btn-container">
                <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, sub.id)}>Delete</button>
                </span>

              </div>
            })
          }
        </div>
        </div>
      </Fragment>
      
    );
  }
}


export default ShowSubscriber;
