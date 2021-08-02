import {useState} from "react";
const Input = props=>{
let [studentName, handleStudentName] = useState('');
const addStudent = ()=>{
    props.addStudent(studentName);
}
const stdName = event=>{
    handleStudentName(event.target.value);
}

    return(
        <div>

            <input onKeyUp={stdName} />
            <button onClick={addStudent}>add student</button>
        </div>
    )
}
export default Input;