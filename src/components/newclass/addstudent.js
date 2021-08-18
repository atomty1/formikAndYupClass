import React, { Component } from 'react';
import Input from './Input';
class AddStudent extends Component {
    state = { inputInfo: [{name: "firstname", val: "", }, {name: "lastname", val: ""}, {name: "dept", val: ""}, {name: "school", val: ""}]
  }
setInfo=(e, i)=>{
  let {inputInfo} = this.state;
  inputInfo[i].val= e.target.value;
this.setState({inputInfo});
}
addStudent = ()=>{ 
  let {inputInfo} = this.state;
  let newObj = {};
  let infoNames = inputInfo.map(val=>val.name);
for (let i = 0; i < inputInfo.length; i++) {
    newObj[infoNames[i]]= inputInfo[i].val; 
}
let {dept, school} = newObj;
this.props.addStd({name: `${newObj.firstname} ${newObj.lastname}`, dept, school});
inputInfo = inputInfo.map(val=>{return {...val, val: ""}});
this.setState({inputInfo}); 
}

    render() { 
      let {setInfo} = this;
      let {inputInfo} = this.state;
        return <>
           <div>
        Add student here
        {inputInfo.map((inp, i)=>(
           <Input key={i} i={i}  info={inp} setMyInfo={setInfo} />
        ))}
        <button onClick={this.addStudent}>add student</button>
      </div>
      </>
    }
}
 
export default AddStudent;