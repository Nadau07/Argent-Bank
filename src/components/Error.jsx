import { NavLink } from "react-router-dom";
import "../style/Error.css";

/**
 *
 * @returns {JSX} : Composant affichant le contenu de la page Erreur.
 *
 */

function Error() {
  return (
    <div className="error-body">
      <h1 className="error-title">ERROR 404</h1>

      <p className="error-p">La page demandée n'existe pas.</p>
      <NavLink to={`/`} className="link-retour">
        {" "}
        Retour à la page d'accueil.
      </NavLink>
    </div>
  );
}

export default Error;
