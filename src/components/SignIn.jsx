import React from "react";
import "../style/SignIn.css";
import { Token, UserName, FirstName, LastName,} from "../services/redux";
import {GetToken, ProfileData } from "../services/api";
import {useDispatch} from 'react-redux';
import { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


function SignIn(){


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        localStorage.clear();
      }, []);
    
      // Handlers
      async function onClick(e) {
        e.preventDefault();
        try {
          const token = await Token(email, password);
          const userName = await UserName(token);
          const firstName = await FirstName(token);
          const lastName = await LastName(token);
    
          dispatch(GetToken(token));
          dispatch(ProfileData(userName, firstName, lastName));
    
          localStorage.setItem('token', token);
          localStorage.setItem('userName', userName);
          localStorage.setItem('firstName', firstName);
          localStorage.setItem('lastName', lastName);
    
          navigate(`/User/${userName}`);
        } catch (error) {
          console.log('Informations incorrectes', error);
        }
      }

    return(
<>
<div className="body-connexion">

    <div className="modale-connexion">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1 className="modale-connexion-title">Sign In</h1>
        <form className="modale-connexion-form">
            <label className="modale-connexion-label">Username</label>
            <input className="modale-connexion-input" type="text" id="email" onChange={(e) => setEmail(e.target.value)} />
            <label className="modale-connexion-label">Password</label>
            <input className="modale-connexion-input" type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            <div className="checkbox">
                    <input type="checkbox" id="remember-me"/>
            <label>Remember me</label>
            </div>
        
            <button type="submit" className="modale-connexion-button" onClick={onClick}>Sign In</button>
        </form>
    </div>

</div>

</>
    )
}

export default SignIn