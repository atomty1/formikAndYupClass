import { useEffect, useState } from "react"
import axios from 'axios';
const EffectFunction = ()=>{
    const [name, setName]= useState("");
    const [dept, setDept]= useState("hardware");
    const [num, setNum]= useState(0);
    const [display, setDisplay]= useState("");
  
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/users/2").then(res=>{
    //         setName(res.data.name);
    //     })
    // }, []);
    useEffect(()=>{
     
             if(num>5){
        setDisplay("Big")
       }else{
        setDisplay("small")
       }
    }, [num])

   
    return(
        <>
        {display}
        {num}
        <button onClick={()=>setNum(Math.floor(Math.random()*10))}>change dept</button>

        </>
    )
}
export default EffectFunction;