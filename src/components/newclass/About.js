import React from "react";
import { Route } from "react-router";
import { Link } from "react-router-dom";

const About = ()=>{
    
    return(
        <>
     
      <Link to="/info/company">View our company</Link>
      <Link to="/info/location">View our location</Link>
        <Route path="/info/company">
        
        <div>About The company
                <p>
              I am the company message
                </p>

        </div>
    </Route>
    <Route path="/info/location">
        <div>
            About our location
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    </Route>
        </>
    )
}
export default About;