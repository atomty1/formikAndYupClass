import React, { Component } from 'react';
import Child from './Child';
class ClassLife extends Component {
    constructor(){
        super();
        console.log("parent constructor");
    }
    state={name: "Taiwo"}
    componentDidUpdate(){
        console.log(" parent updated");
    }
    
    changeParent =()=>{
        this.setState({name: "Kenny"});
    }
    render() { 
        return ( 
            <React.Fragment>
                I am ClassLife component
            <button onClick={this.changeParent}>change Parent</button>
                <Child myName ={this.state.name}/>
            </React.Fragment>
         );
    }
}
 
export default ClassLife;