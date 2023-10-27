import LogoSite from "../img/argentBankLogo.webp";
import "../style/banner.css";
import { NavLink } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import { EditUser } from "../services/redux";
import IconLogOut from "../img/icon-log-out.svg";


function Banner() {
  const userName = useSelector(state => state.user.userInfo.userName);
    const dispatch = useDispatch();

  return(
    <nav className="nav">
  
      <NavLink to={`/`}><img className="image_banner_logo" src={LogoSite} alt="Logo Argent Bank"/>
      </NavLink>
   
   <div className="sign-out">

    <NavLink to={"/SignIn"} className="no-underline">
    <i className="fa fa-user-circle sign-in-icon">{userName}</i>
    </NavLink>
  
        <NavLink to={`/`} className="no-underline div-logout"
         onClick={() => {
            dispatch(EditUser());
            localStorage.clear();
          }}><img src={IconLogOut} alt="icon-logout" className="icon-logout"/> Log Out</NavLink>

   </div>
    
    
    
    </nav>
  )
}

export default Banner;
