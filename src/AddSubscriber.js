import React, {Component} from "react";
import Header from "./Header";
import './AddSubscriber.css';
import { Link } from 'react-router-dom';

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state = {
            id: 0,
            name: '',
            phone: '',
        }
    }

    inputChangedHandler = (e)=>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(this.state);
    }

    onFormSubmitted = (e) => {
        e.prevenDefault();
        this.props.addSubscriberHander(this.state);
        this.setState({id: 0, name: "", phone: ""});
        this.props.history.push("/");
    }

    render(){
        const {name, phone} = this.state;
        return(
            <div>
                <Header heading="Add Subscriber"></Header>
                <div className="component-body-container"> 
                    <button className="custom-btn">Back</button>
                    <Link to="/">
                        <button className="custom-btn">Back</button>
                    </Link>
                </div>
                <form className="subscriber-form" onSubmit={this.onFormSubmitted.bind(this)}>
                    <label htmlFor="name" className="label-control">Name: </label><br>
                    </br>
                    <input id="name" type="text" className="input-control" name="name" onChange={this.inputChangedHandler}></input><br></br><br/>
                    <label htmlFor="phone" className="label-control">Phone: </label><br>
                    </br>
                    <input id="phone" type="text" className="input-control" name="phone" onChange={this.inputChangedHandler}></input><br></br><br/>
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subscriber to be added: </span><br/>
                        <span className="subscriber-info">Name: {name}</span><br/>
                        <span className="subscriber-info">Phone: {phone}</span>

                    </div>
                    <button type="submit" className="custom-btn add-btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddSubscriber