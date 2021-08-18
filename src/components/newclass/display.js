import React, { Component } from 'react';
class Display extends Component {
    // state = {  }
    render() { 
        return ( 
            <div>I am {this.props.val} years old
            <button onClick={this.props.deleteArr}>Delete</button>
            </div>
         );
    }
}
 
export default Display;