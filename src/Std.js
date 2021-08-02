const Student = props=>{
    let {name, id}=props.student;
    let {myDelete} = props;
    
    return(
        <div>My name is {name}, my id is {id}
           <button onClick={()=>myDelete(id)}>delete student</button>
        </div>
    )
}
export default Student;