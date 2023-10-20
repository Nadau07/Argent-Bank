import React from "react";
import "../style/bodyUser.css";
import Account from "./Account";

function BodyUser(){
    return(
        <div className="bodyUser-container">
            <Account/>
            <Account/>
            <Account/>
        </div>
    )
}

export default BodyUser