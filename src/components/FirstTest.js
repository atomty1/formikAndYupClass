import { useDispatch, useSelector } from "react-redux";

const FirstTest = ()=>{
    
    let num =useSelector(state=>state.num);
    let increment = useDispatch();
    console.log(num);
    return(
        <div>
            Hello world  {num}
            <button onClick={()=>increment({type:"INCREMENT"})}>Increase</button>
        </div>
    )
}
export default FirstTest;