import LogoSite from "../img/argentBankLogo.png"
import "../style/banner.css";
import { NavLink } from "react-router-dom";


function Banner() {
  return(
    <nav className="nav">
   
      <NavLink to={`/`}><img className="image_banner_logo" src={LogoSite} alt="Logo Argent Bank"/>
      </NavLink>
        
      
         
    
   
   <div className="sign-in-content">
   
        <NavLink to={`/SignIn`} className="sign-in no-underline"> 
         <i className="fa fa-user-circle sign-in-icon"> Sign In</i>
       </NavLink>

   </div>
    
    
    
    </nav>
  )
}

export default Banner;
