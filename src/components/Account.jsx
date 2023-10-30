import React from "react";
import "../style/account.css";

/**
 *
 * @returns {JSX} : Composant affichant les comptes de l'utilisateur.
 *
 */

function Account({ title, amount, description, button }) {
  return (
    <div className="body">
      <div className="account">
        <div className="account-info">
          <p className="account-checking">{title}</p>
          <p className="account-money">{amount}</p>
          <p className="account-balance">{description}</p>
        </div>
        <button className="account-info-button">{button}</button>
      </div>
    </div>
  );
}

export default Account;
