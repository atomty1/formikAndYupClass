import {useParams} from "react-router-dom";
const Contact = ()=>{
    let params = useParams();
    let {name="I dont know", id=0} = params;
    return(
        <div>
           welcome {name}, your Id is {id}
        </div>
    )
}
export default Contact;