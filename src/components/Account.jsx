import React from "react";
import "../style/account.css"


function Account({title, amount, description, button}){
    return(
        <>
          <div className="bodyUser-container">
  <div className="account">
            <div className="account-info">
                <p>{title}</p>
                <p>{amount}</p>
                <p>{description}</p>
            </div>
            <button className="account-info-button">{button}</button>
        </div>

          </div>
       
      
        
        </>
    )
}

export default Account