import React, { Component } from 'react';
class AddStudent extends Component {
    state = { firstname:"", lastname: "", dept:"", school: "" }
setInfo=(e)=>{
this.setState({[e.target.name]: e.target.value});
}
addStudent = ()=>{ 
  let {firstname, lastname, dept, school} = this.state;
  this.props.addStd({name: firstname+" "+lastname, dept, school});
  this.setState({firstname: "", lastname: "", dept: "", school: ""});
}

    render() { 
      let {setInfo} = this;
      let {firstname, lastname, dept, school} = this.state;
        return <>
           <div>
        Add student here
        <input name="firstname" value={firstname} onChange={setInfo} placeholder="firstname"/>
        <input name="lastname" value={lastname} onChange={setInfo} placeholder="lastname"/>
        <input name="dept" value={dept} onChange={setInfo} placeholder="dept"/>
        <input name="school" value={school} onChange={setInfo} placeholder="school"/>
        <button onClick={this.addStudent}>add student</button>
      </div>
      </>
    }
}
 
export default AddStudent;