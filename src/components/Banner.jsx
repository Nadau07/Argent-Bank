import LogoSite from "../img/argentBankLogo.webp";
import "../style/banner.css";
import { NavLink } from "react-router-dom";
import IconUser from "../img/icon-user.svg";

function Banner() {
  return (
    <nav className="nav">
      <NavLink to={`/`}>
        <img
          className="image_banner_logo"
          src={LogoSite}
          alt="Logo Argent Bank"
        />
      </NavLink>

      <NavLink to={`/SignIn`} className="sign-in">
        <img src={IconUser} alt="Icon User" className="icon-user" /> Sign In{" "}
      </NavLink>
    </nav>
  );
}

export default Banner;
