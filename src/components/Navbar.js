import {Link} from 'react-router-dom';
const Mynavbar = props=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

         <Link className="navbar-brand" to="/">Navbar</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
     </button>
     <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact/taiwo/1">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact/Kenny/2">Contact</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/classapp/James/3">Class app</Link>
      </li>
     
    </ul>
  
    </nav>
    )
}
export default Mynavbar;