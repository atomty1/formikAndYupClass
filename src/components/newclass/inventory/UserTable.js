import { useState } from "react";
import NewFile from "./newfile";
// import UserGood from "./components/newclass/investoryuserGood";


const UserTable = ({goods, deductGood})=>{
    const [goodsToDeduct, setGoodsToDeduct] = useState([]);
   
    const getQtyAndInd = (i, qty)=>{
       let myGood = goodsToDeduct.find(good=>good.index === i);
      
       if(myGood){
        let getIndex = goodsToDeduct.indexOf(myGood);
            myGood.qty = qty;
          let  getAllGoods = [...goodsToDeduct];
            getAllGoods[getIndex] = myGood;
            setGoodsToDeduct(getAllGoods); 
       }else{
        setGoodsToDeduct([...goodsToDeduct, {index: i, qty}]);
       }
      

    }
    const checkout = ()=>{
        deductGood(goodsToDeduct);
        setGoodsToDeduct([]);
    }
    return(
        <>
        <table border={2}>
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>quantity</td>
                    <td>quantity to buy </td>
                    <td>Cost</td>
                    <td>image</td>
                   
                </tr>
            </thead>
            {goods.map((good, i)=>(
               <NewFile  getQtyAndInd={getQtyAndInd}  key={i} i={i} good={good}/>
                // <UserGood getQtyAndInd={getQtyAndInd}  key={i} i={i} good={good}/>
                          
            
            ))}


        </table>
             <button onClick={checkout}>checkout</button>
        </>
    )
}
export default UserTable;