import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            age: props.age
        }
    }
    increaseAge = () => {
        this.setState({
            age: this.state.age + 1
        })
    }
    render(){
        const {firstname, lastname, haircolor} = this.props;
        return(
            <div>
                <h2>{firstname}, {lastname}</h2>
                <p> Age: {this.state.age}</p>
                <p> Hair Color: {haircolor}</p>
                <button onClick={this.increaseAge}>Birthday button for {firstname}  {lastname}</button>
            </div>
            );
    }
}

export default PersonCard;
