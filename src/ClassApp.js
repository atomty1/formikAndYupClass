import React, { Component } from 'react';
class ClassApp extends Component{
  myFunc=()=>{
    setTimeout(()=>{
      this.props.history.push('/about')
    }, 3000);
  }


 
  render(){
    
    let {name, id} = this.props.match.params;
    

    
    return(
    <div>class component
      My name is {name}, my ID is {id}
      {this.myFunc()}
    </div>
    )
  }
}
export default ClassApp;