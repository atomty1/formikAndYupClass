import React, { Component } from 'react';
import AddStudent from './components/newclass/addstudent';
import DisplayStudent from './components/newclass/displaystudent';
// import DisplayStudent from './components/newclass/displaystudent';
// class Anything extends Component {
//   state={firstname: "", lastname: "", allStudents: {js1: [], js2: [], js3: []}, myClass:"js1"};
//   setInfo = e=>{
//    this.setState({[e.target.name]: e.target.value})
//   }

// addStudent= ()=>{

  
//   let {allStudents, firstname, lastname, myClass} = this.state;
//   allStudents[myClass].push({firstname, lastname, captain:false});
//   // console.log(allStudents, firstname, lastname, myClass);

//   this.setState({allStudents});
// }
// hideOrShow=ind=>{
//   let {allStudents} = this.state;
//   if(allStudents[ind].show){
//     allStudents[ind].show= false;
//   }else{
//     allStudents[ind].show= true;
//   }
  
//   this.setState({allStudents});
// }
// setClass=e=>{
//   this.setState({myClass: e.target.value});
// }
// makeCaptain=(cls, i)=>{
//   let {allStudents} = this.state;

//   for (let index = 0; index < allStudents[cls].length; index++) {
//       if(index==i){
//         allStudents[cls][index].captain= true;
//       }else{
        
//         allStudents[cls][index].captain= false;
//       }
  
//   }
//   this.setState({allStudents});

// }




//   render() { 
//     let {allStudents, firstname, lastname} = this.state;
//     // console.log(allStudents);
// return(
//   <>
//   <select value={this.state.myClass} onChange={this.setClass}>
//     <option value="js1">js1</option>
//     <option value="js2">js2</option>
//     <option value="js3">js3</option>
//   </select>

//     <input placeholder="firstname" value={firstname} name="firstname" onChange={this.setInfo} />
//     <input placeholder="lastname" value={lastname} name="lastname" onChange={this.setInfo}/>
//     {/* <input placeholder="department" value={department} name="department" onChange={this.setInfo}/> */}

//     <button onClick={this.addStudent}>add student</button>
// {allStudents['js1'].length>0? allStudents['js1'].map((student, i)=>(
//   <div key={i}>
//     <h3>student {i+1}</h3>
//     {student.firstname} {student.lastname} {student.captain?<button>Captain</button>: <button onClick={()=>this.makeCaptain('js1', i)}>make captain</button>}
//   </div>
// )):<div>No student in JS1</div>}

// {allStudents['js2'].length>0? allStudents['js2'].map((student, i)=>(
//   <div key={i}>
//     <h3>student {i+1}</h3>
//     {student.firstname} {student.lastname} {student.captain?<button>Captain</button>: <button onClick={()=>this.makeCaptain('js2', i)}>make captain</button>}
//   </div>
// )):<div>No student in JS2</div>}
   
//    {allStudents['js3'].length>0? allStudents['js3'].map((student, i)=>(
//   <div key={i}>
//     <h3>student {i+1}</h3>
//     {student.firstname} {student.lastname} {student.captain?<button>Captain</button>: <button onClick={()=>this.makeCaptain('js3', i)}>make captain</button>}
//   </div>
// )):<div>No student in JS3</div>}

//   </>
// )
   
//   }
// }
 
// export default Anything;

class App extends Component {
  state = { students: [{name: "Taiwo",dept: "software", school: "SQI"},
  {name: "Kenny",dept: "hardware", school: "SQI"},
  {name: "Idowu",dept: "CSE", school: "LAUTECH"}], name: "Kenny" };
  deleteStudent = i=>{
    let {students} = this.state;
    students = students.filter((_, ind)=>ind!==i);
    this.setState({students});
  }
  addStudent = student=>{
    let {students} = this.state;
    this.setState({students: [...students, student]})
  }
  render() { 
    let {students}= this.state;
    return <>

    {students.length>0?
         students.map((student, i)=>(
           <DisplayStudent key={i} std={student} delStudent={()=>this.deleteStudent(i)}/>
           ))
           :
           <div>No student present</div>
         }
           <AddStudent addStd={this.addStudent}/>
   
    </>
  }
}



 
export default App;


