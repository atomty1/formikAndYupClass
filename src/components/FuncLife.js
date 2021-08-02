import { Fragment, useContext, useState } from "react"
import { MyContext } from "../MyContext";
import Omo from "./Omo"

const FuncLife = props=>{
   const {user, setUser}= useContext(MyContext);
   console.log(user);
   
    let [val, setVal]= useState("Taiwo");
    let [detail, setDetail]= useState("Taiwo");
    return(
        <Fragment>
            hjknb My name is {user.name}
            <button onClick={()=>setUser({name: "Kenny"})}>click</button>
            {/* My name is {name} */}
            {/* {JSON.stringify(info)} */}
            {/* <Omo detail={detail}/>
            This is a functional component
            <input onKeyUp={event=>setVal(event.target.value)}/>
        <button onClick={()=>setDetail(val)}>set</button> */}
        </Fragment>
    )
}
export default FuncLife;