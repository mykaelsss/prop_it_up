import React from 'react';
//ORIGINAL CLASS COMPONENT
// class PersonCard extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             age: props.age
//         }
//     }
//     increaseAge = () => {
//         this.setState({
//             age: this.state.age + 1
//         })
//     }
//     render(){
//         const {firstname, lastname, haircolor} = this.props;
//         return(
//             <div>
//                 <h2>{firstname}, {lastname}</h2>
//                 <p> Age: {this.state.age}</p>
//                 <p> Hair Color: {haircolor}</p>
//                 <button onClick={this.increaseAge}>Birthday button for {firstname}  {lastname}</button>
//             </div>
//             );
//     }
// }

// NEW FUNCTIONAL COMPONENT
const PersonCard = props => {
    const { firstname, lastname, age, haircolor } = props
    return(
        <div>
            <h1>{ lastname }, { firstname }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { haircolor }</p>
        </div>
    )
}

export default PersonCard;
