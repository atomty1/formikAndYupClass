import { useState } from "react"

const UserGood = ({good, i, getQtyAndInd})=>{
    const [cost, setCost] = useState(0);
    const myFunc = (e)=>{
        setCost(e.target.value* good.goodPrice);
        getQtyAndInd(i, e.target.value);
    }

    return(
        <>
        <tr>
                    <td>{i+1}</td>
                    <td>{good.goodName}</td>
                    <td>{good.goodPrice}</td>
                    <td>{good.goodQty}</td>
                    <td><input type="number" onKeyUp={myFunc}/></td>
                    <td>{cost}</td>
                    <td>{good.goodFile}</td>
                   
        </tr>
        </>

    )

}
export default UserGood;