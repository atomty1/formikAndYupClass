import { Fragment, useEffect } from "react"

const Omo = ({detail})=>{
    useEffect(()=>{
        console.log("hhh");
    }, [detail])
    return(
        <Fragment>
            I am the omo component detail is {detail}
        </Fragment>
    )
}
export default Omo;