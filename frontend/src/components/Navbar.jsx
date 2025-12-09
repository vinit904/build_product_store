import "./nav.css"
import { Link } from "react-router-dom";


function NavBar(){
  return(
    <div id="nav">
      <Link to="/"><li>Product Store </li></Link>
      
      <Link to="/create"><li>Create page</li></Link>
      <button>Toogle</button>


      

    </div>
  );
}

export default NavBar;