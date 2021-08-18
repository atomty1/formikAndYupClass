import {useParams} from "react-router-dom";
import About from "./newclass/About";
const Contact = ()=>{
    let params = useParams();
    let {name="I dont know", id=0} = params;
    return(
        <div>
           welcome {name}, your Id is {id}
           <About dept="software"/>
        </div>
    )
}
export default Contact;