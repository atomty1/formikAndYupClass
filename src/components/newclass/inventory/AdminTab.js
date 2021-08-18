import EachGoo from "./EachGoo";

const AdminTab = ({goods, deleteGood})=>{
    return(
        <>
        <table border={2}>
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>quantity</td>
                    <td>image</td>
                    <td>Delete</td>
                </tr>
            </thead>
            {goods.map((good, i)=>(
                <EachGoo deleteGood={deleteGood} key={i} i={i} good={good}/>
                // <EachGood deleteGood={deleteGood} key={i} i={i} good={good}/>
                

               
            ))}

        </table>
        </>
    )
}
export default AdminTab;