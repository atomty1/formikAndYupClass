import React, { Component } from 'react';
import axios from 'axios';
class EffectClass extends Component {
   
    state = { name:"" }
componentDidMount(){

    axios.get("https://jsonplaceholder.typicode.com/users/1").then(res=>{
        this.setState({name: res.data.name});
    })
}
componentDidUpdate
    
    render() { 
        return ( 
            <>
                Change myName
                My name is {this.state.name}
                <button onClick={()=>this.setState({name: "Kenny"})}></button>
            </>
         );
    }
}
 
export default EffectClass;