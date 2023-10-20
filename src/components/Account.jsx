import React from "react";
import "../style/account.css"
function Account(){
    return(
        <div className="account-info">
            <h1>Argent Bank Checking</h1>
            <p>ARGENT</p>
            <p>Available balance</p>
            <button className="account-button">View transaction</button>

        </div>
    )
}

export default Account