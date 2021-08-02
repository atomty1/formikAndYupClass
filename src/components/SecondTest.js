import React, { Component } from 'react';
import { connect } from 'react-redux';
class SecondTest extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                I am the second component {this.props.myNum}
                <button onClick={this.props.increment}>click</button>
            </div>
         );
    }
}
const mapStateToProps=(state)=>{
    return({
        myNum: state.num
    })
}
const mapDispatchToProps=dispatch=>{
    return(
        {
            increment:()=>dispatch({type:"INCREMENT"})
        }
    )
}
 
export default connect(mapStateToProps, mapDispatchToProps)(SecondTest);