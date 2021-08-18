import React, { Component } from 'react';
class Button extends Component {
    state = {  }
    render() { 
        let {delStudent} = this.props;
        return ( 
            <button onClick={delStudent}>Delete student</button>
         );
    }
}
 
export default Button;