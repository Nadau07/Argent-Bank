import LogoSite from "../img/argentBankLogo.webp";
import "../style/banner.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditUser } from "../services/redux";
import IconLogOut from "../img/icon-log-out.svg";
import IconUser from "../img/icon-user.svg";

function Banner() {
  const userName = useSelector((state) => state.user.userInfo.userName);
  const dispatch = useDispatch();

  return (
    <nav className="nav">
      <NavLink to={`/`}>
        <img
          className="image_banner_logo"
          src={LogoSite}
          alt="Logo Argent Bank"
        />
      </NavLink>

      <NavLink to={"/SignIn"} className="div-username">
        <img src={IconUser} alt="icon User" className="icon-user" />
        {userName}
      </NavLink>

      <NavLink
        to={`/`}
        className="div-logout"
        onClick={() => {
          dispatch(EditUser());
          localStorage.clear();
        }}
      >
        <img src={IconLogOut} alt="icon-logout" className="icon-logout" />
        Log Out
      </NavLink>
    </nav>
  );
}

export default Banner;
