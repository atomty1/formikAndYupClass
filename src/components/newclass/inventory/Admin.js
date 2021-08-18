import { useState } from "react";
import AdminTab from "./AdminTab";

const Admin = ({goods, deleteGood, addGood})=>{
    const [goodName, setGoodName] = useState("");
    const [goodPrice, setGoodPrice] = useState("");
    const [goodQty, setGoodQty] = useState("");
    const [goodFile, setGoodFile] = useState("");
    // const [goods, setGoods] = useState([]);
   const setNewGood = ()=>{
        let fileName = goodFile.slice(12);
        let newGood= {goodName, goodPrice, goodQty, goodFile: fileName };
        addGood(newGood);
   }
   
    return(
        <>
            <input onChange={(e)=>{setGoodName(e.target.value)}} placeholder="goodName"/>
            <input onChange={(e)=>{setGoodPrice(e.target.value)}} placeholder="price"/>
            <input placeholder="quanity" onChange={(e)=>{setGoodQty(e.target.value)}}/>
            <input type="file" onChange={(e)=>{setGoodFile(e.target.value)}}/>
            <button onClick={setNewGood}>Add good</button>
            <AdminTab deleteGood={deleteGood} goods={goods}/>

            {/* <AdminTable deleteGood={deleteGood} goods={goods} /> */}

        </>
    )
}
export default Admin;