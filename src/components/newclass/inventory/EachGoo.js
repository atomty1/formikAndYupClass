const EachGoo = ({good, i, deleteGood})=>{
    return(
        <>
        <tr>
                    <td>{i+1}</td>
                    <td>{good.goodName}</td>
                    <td>{good.goodPrice}</td>
                    <td>{good.goodQty}</td>
                    <td>{good.goodFile}</td>
                    <td onClick={()=>deleteGood(i)}>Delete</td>
        </tr>
        </>

    )

}
export default EachGoo;