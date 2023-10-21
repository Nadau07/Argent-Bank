import "../style/SignIn.css";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginSuccess, LogOut } from '../services/redux';
import {Login} from '../services/api';




function SignIn(){
const dispatch = useDispatch();
const token = useSelector((state)=> state.user.token);

const GestionSignIn = async (e) =>{
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const response = await Login(email,password);
    if (response.status ===200 ){
        const token = await response.json();
        dispatch(LoginSuccess(token));
    }else {
        console.error ("Echec de connexion");
    }
};

const GestionLogOut = () =>{
    dispatch(LogOut());
};

return(
    <>
    {token ? (
      <div className="body-connexion">
        <div className="modale-connexion">
          <p>Vous êtes connecté!</p>
          <button onClick={GestionLogOut}>Se déconnecter</button>
        </div>
      </div>
    ) : (
      <div className="body-connexion">
        <div className="modale-connexion">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1 className="modale-connexion-title">Sign In</h1>
          <form className="modale-connexion-form">
            <label className="modale-connexion-label">Username</label>
            <input className="modale-connexion-input" type="text" id="email" />
            <label className="modale-connexion-label">Password</label>
            <input className="modale-connexion-input" type="password" id="password" />
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label>Remember me</label>
            </div>
            <button type="submit" className="modale-connexion-button" onClick={GestionSignIn}>
              Sign In
            </button>
          </form>
        </div>
      </div>
    )}
  </>
    )
}
export default SignIn
