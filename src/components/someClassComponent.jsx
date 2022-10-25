import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const {firstname, lastname, haircolor, age} = this.props;
        return(
            <div>
                <h2>{firstname}, {lastname}</h2>
                <p> Age: {age}</p>
                <p> Hair Color: {haircolor}</p>

            </div>
            );
    }
}

export default PersonCard;
