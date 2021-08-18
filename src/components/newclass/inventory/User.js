import UserTable from "./UserTable"

const User = ({goods, deductGood})=>{
    return(
        <>
        <UserTable goods={goods} deductGood={deductGood}/>

        </>
    )
}
export default User;