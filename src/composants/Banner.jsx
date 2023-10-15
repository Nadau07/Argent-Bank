import "../style/banner.css";
import { NavLink } from "react-router-dom";


function Banner() {
  return(
    <nav className="nav">
    <div className="image_banner">
      <NavLink to={`/`}><img className="image_banner_logo" src="./argentBankLogo.png" alt="Logo Argent Bank"/>
      </NavLink>
        
      
         
    </div>
   
   <div className="sign-in-content">

   <i className="fa fa-user-circle sign-in-icon"></i>
 
        <NavLink to={`/SignIn`} className="sign-in">Sign In</NavLink>

   </div>
    
    
    
    </nav>
  )
}

export default Banner;
