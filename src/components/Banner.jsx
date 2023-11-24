import LogoSite from "../img/argentBankLogo.webp";
import "../style/banner.css";
import { NavLink } from "react-router-dom";
import IconUser from "../img/icon-user.svg";
import { useSelector, useDispatch } from "react-redux";
import IconLogOut from "../img/icon-log-out.svg";
import { LogOut } from "../services/redux";
import { createSelector } from "reselect";
import { selectToken, UserData as rawUserData } from "../services/redux";

/**
 *
 * @returns {JSX} : Composant affichant la bannière du site : Utilisateur non connecté.
 *
 */

const UserData = createSelector([rawUserData], (userData) => userData);

function Banner() {
  const token = useSelector(selectToken);
  const userData = useSelector(UserData);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(LogOut());
  };

  return (
    <nav className="nav">
      <NavLink to={`/`}>
        <img
          className="image_banner_logo"
          src={LogoSite}
          alt="Logo Argent Bank"
        />
      </NavLink>

      {token ? (
        <>
          <NavLink to={`/user/:userName`} className="user-profile">
            <img src={IconUser} alt="Icon User" className="icon-user" />{" "}
            {userData.userName}
          </NavLink>

          <NavLink
            to={`/SignIn`}
            onClick={handleSignOut}
            className="div-logout"
          >
            <img src={IconLogOut} alt="icon-logout" className="icon-logout" />
            Sign Out
          </NavLink>
        </>
      ) : (
        <NavLink to={`/SignIn`} className="sign-in">
          <img src={IconUser} alt="Icon User" className="icon-user" /> Sign In{" "}
        </NavLink>
      )}
    </nav>
  );
}

export default Banner;
