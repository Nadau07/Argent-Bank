import LogoSite from "../img/argentBankLogo.png";
import "../style/banner.css";
import { NavLink } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { EditUser } from "../services/redux";


function Banner({name}) {

    const dispatch = useDispatch();

  return(
    <nav className="nav">
    <div className="image_banner">
      <NavLink to={`/`}><img className="image_banner_logo" src={LogoSite} alt="Logo Argent Bank"/>
      </NavLink>
        
      
         
    </div>
   
   <div className="sign-in-content">

   <i className="fa fa-user-circle sign-in-icon">{name}</i>
 
        <NavLink to={`/SignIn`} className="sign-in"
         onClick={() => {
            dispatch(EditUser());
            localStorage.clear();
          }}>Log Out</NavLink>

   </div>
    
    
    
    </nav>
  )
}

export default Banner;
