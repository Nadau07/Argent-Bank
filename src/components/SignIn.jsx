import "../style/SignIn.css";
import React, { useState } from "react";
import { useDispatch } from "react-redux"; // envoi les actions du reducer
import { token, userName, firstName, lastName } from "../services/api";
import { useNavigate } from "react-router-dom";
import { LoginSuccess, LoginFailure } from "../services/redux";

/**
 *
 * @returns {JSX} : Composant affichant le formulaire de connexion.
 *
 */

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const InputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const FormSignIn = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    try {
      const tokenValue = await token(formData.email, formData.password);
      const userNameValue = await userName(tokenValue);
      const firstNameValue = await firstName(tokenValue);
      const lastNameValue = await lastName(tokenValue);

      dispatch(
        LoginSuccess({
          token: tokenValue,
          userName: userNameValue,
          firstName: firstNameValue,
          lastName: lastNameValue,
        })
      );
      navigate(`/user/${userName}`);
    } catch (error) {
      console.error(
        "Échec de la connexion. Veuillez vérifier vos identifiants.",
        error
      );
      dispatch(LoginFailure());
      setErrorMessage("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <div className="body-connexion">
      <div className="modale-connexion">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1 className="modale-connexion-title">Sign In</h1>
        <form className="modale-connexion-form">
          <label className="modale-connexion-label">Username</label>
          <input
            className="modale-connexion-input"
            type="text"
            name="email"
            value={formData.email}
            onChange={InputChange}
          />
          <label className="modale-connexion-label">Password</label>
          <input
            className="modale-connexion-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={InputChange}
          />
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button
            type="submit"
            className="modale-connexion-button"
            onClick={FormSignIn}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
