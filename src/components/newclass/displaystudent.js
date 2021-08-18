import React, { Component } from 'react';
import Button from './Button';
class DisplayStudent extends Component {

    render() { 
        let {name, dept, school} = this.props.std;
        let {delStudent} = this.props;
        return <>
      
        <div>
         Name: {name},
          department: {dept}, at {school}<br/>
          I hope you are happy to meet me.
          <Button delStudent={delStudent}/>
        </div>
      
        </>
    }
}
 
export default DisplayStudent;