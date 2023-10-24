import '../style/SignIn.css'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // envoi les actions du reducer
import { token, userName, firstName, lastName } from '../services/api';
import { useNavigate } from 'react-router-dom';
import { LoginSuccess, LoginFailure } from '../services/redux';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });



  //Fonction InputChange : pour mettre à jour formData quand le formulaire est modifié
  //copie formData  et ajoute les nouvelles valeurs
  const InputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  // Fonction FormSignIn : qui gère la soumission du formulaire de connexion
  const FormSignIn = async (e) => {
    e.preventDefault();
    console.log("FormSignIn")
    try {
      const tokenValue = await token(formData.email, formData.password);
     
      const userNameValue = await userName(tokenValue);
 
      const firstNameValue = await firstName(tokenValue);
  
      const lastNameValue = await lastName(tokenValue);
   

      dispatch(LoginSuccess({
        token: tokenValue,
        userName: userNameValue,
        firstName: firstNameValue,
        lastName: lastNameValue }));

      localStorage.setItem('token', tokenValue);
      localStorage.setItem('userName', userNameValue);
      localStorage.setItem('firstName', firstNameValue);
      localStorage.setItem('lastName', lastNameValue);

      navigate(`/user`);
    } catch (error) {
      console.error("Échec de la connexion. Veuillez vérifier vos identifiants.", error);
      dispatch(LoginFailure());
    
    }
  };

  return (
    <div className="body-connexion">
      <div className="modale-connexion">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1 className="modale-connexion-title">Connexion</h1>
        <form className="modale-connexion-form">
          <label className="modale-connexion-label">Username</label>
          <input
            className="modale-connexion-input"
            type="text"
            name="email"
            value={formData.email}
            onChange={InputChange}
          />
          <label className="modale-connexion-label">Mot de passe</label>
          <input
            className="modale-connexion-input"
            type="password"
            name="password"
            value={formData.password}
            onChange={InputChange}
          />
          <div className="checkbox">
            <input type="checkbox" id="remember-me" />
            <label>Se souvenir de moi</label>
          </div>
          <button type="submit" className="modale-connexion-button" onClick={FormSignIn}>
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
