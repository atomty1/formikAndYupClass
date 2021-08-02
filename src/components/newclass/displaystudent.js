import React, { Component } from 'react';
class DisplayStudent extends Component {

    render() { 
        let {name, dept, school} = this.props.std;
        let {delStudent} = this.props;
        return <>
      
        <div>
         Name: {name},
          department: {dept}, at {school}<br/>
          I hope you are happy to meet me.
          <button onClick={delStudent}>Delete student</button>
        </div>
      
        </>
    }
}
 
export default DisplayStudent;