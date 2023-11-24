import LogoSite from "../img/argentBankLogo.webp";
import "../style/banner.css";
import { NavLink } from "react-router-dom";
import IconUser from "../img/icon-user.svg";
import { useSelector, useDispatch } from "react-redux";
import IconLogOut from "../img/icon-log-out.svg";

/**
 *
 * @returns {JSX} : Composant affichant la bannière du site : Utilisateur non connecté.
 *
 */

import { selectToken, UserData } from "../services/redux";
import { LogOut } from "../services/redux";

function Banner() {
  const token = useSelector(selectToken);
  const userData = useSelector(UserData);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    // Dispatch l'action de déconnexion et réinitialisation des données du profil
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
        // Si l'utilisateur est connecté
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
        // Si l'utilisateur n'est pas connecté
        <NavLink to={`/SignIn`} className="sign-in">
          <img src={IconUser} alt="Icon User" className="icon-user" /> Sign In{" "}
        </NavLink>
      )}
    </nav>
  );
}

export default Banner;
