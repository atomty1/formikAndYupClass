import { Link } from "react-router-dom"

const Nav = ()=>{
    return(
        <>
            <Link to="/">Home</Link>|
            <Link to="/admin">Admin</Link>|
            <Link to="/user">User</Link>
        </>
    )
}
export default Nav;