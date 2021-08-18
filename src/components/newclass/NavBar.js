import React from "react";
import {Link } from 'react-router-dom'; 
const NavBar = ()=>{
    return(
        <>
        <Link to="/">Home page</Link>|
        <Link to="/dashboard/Taiwo">Taiwo page</Link>|
        <Link to="/dashboard/Kenny">Kenny page</Link>|
        <Link to="/dashboard/James">James page</Link>|
        <Link to="/info">About page</Link>|
        <Link to="/contact">Contact us</Link>|
        <Link to="/contact/first">Contact first</Link>|
        </>
    )
}
export default NavBar;