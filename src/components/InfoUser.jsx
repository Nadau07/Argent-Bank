import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditProfile } from "../services/api";
import { EditUser } from "../services/redux";
import "../style/InfoUser.css"


function InfoUser({
    
    firstName,
    lastName,
    display,
}){

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    const token = localStorage.getItem('token');

    const ChangeUserName = (e) => {
        setUserName(e.target.value);
      }; // met à jour l'état avec la valeur saisie par l'utilisateur

      const ClickChange = (e) => {
        e.preventDefault();
        EditProfile(token, userName);
        dispatch(EditUser(userName));
        localStorage.setItem('userName', userName);
        navigate(`/user/${userName}`); // sauvegarde la mise à jour du nom de l'utilisateur
      };

  return(
        <>
        <div className={display ? 'user-form' : 'user-form-cach'}>
          <h3>Edit user info</h3>
          <form  className="form_container">
            <div className="form-row">
              <label htmlFor="user_name">User name:</label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder={userName}
                onChange={ChangeUserName}
              />
            </div>
            <div className="form-row">
              <label htmlFor="first_name">First name:</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder={firstName}
                disabled={true}
              />
            </div>
            <div className="form-row">
              <label htmlFor="last_name">Last name:</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder={lastName}
                disabled={true}
              />
            </div>
            <div className="buttons">
              <button onClick={ClickChange}>SAVE</button>
              <button>CANCEL</button>
            </div>
          </form>
        </div>
      </>

    );
}

export default InfoUser;