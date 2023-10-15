import React from "react";
import "../style/SignIn.css";

function SignIn(){

    return(
<>
<div className="body-connexion">

    <div className="modale-connexion">
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1 className="modale-connexion-title">Sign In</h1>
        <form className="modale-connexion-form">
            <label className="modale-connexion-label">Username</label>
            <input className="modale-connexion-input" type="text" id="email"/>
            <label className="modale-connexion-label">Password</label>
            <input className="modale-connexion-input" type="password" id="password" />
            <div className="checkbox">
                    <input type="checkbox" id="remember-me"/>
            <label>Remember me</label>
            </div>
        
            <button type="submit" className="modale-connexion-button">Sign In</button>
        </form>
    </div>

</div>

</>
    )
}

export default SignIn