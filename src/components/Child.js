import React, { Component } from 'react';
class Child extends Component {
    constructor(){
        super();
        console.log("child constructor");
        this.state={dept: "software"}
    }
    componentDidMount(){
        console.log("mounted");
    }
    componentDidUpdate(prevProps, prevState){
        console.log(" child updated");
        console.log(prevProps, prevState);
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextState.dept==="hardware"? true: false;
    }
    multimedia=()=>{
        this.setState({dept: "multimedia"});
    }
    hardware=()=>{
        this.setState({dept: "hardware"});
    }
    
    render() { 
        console.log("render");
        return ( 
            <React.Fragment>
                I am the child component
                <button onClick={this.multimedia}>change multimedia</button>
                <button onClick={this.hardware}>change hardware</button>
                {this.state.dept}
            </React.Fragment>
         );
    }
}
 
export default Child;