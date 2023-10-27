import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BannerLog from "../components/BannerLog";
import Account from "../components/Account";
import Footer from "../components/Footer";
import InfoUser from "../components/InfoUser";
import { EditUser } from "../services/redux";
import "../style/User.css";

function PageUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo); //extraction des données des users
  const userName = user ? user.userName : "";
  const firstName = user ? user.firstName : "";
  const lastName = user ? user.lastName : "";

  const [Form, setForm] = useState(false);

  useEffect(() => {
    const userNameFromStorage = localStorage.getItem("userName");
    console.log("userNameFromStorage:", userNameFromStorage);
    if (userNameFromStorage) {
      dispatch(EditUser({ userName: userNameFromStorage }));
    }
  }, [dispatch]);

  return (
    <>
      <BannerLog userName={userName} />
      <div className="body-user">
        <h1>
          {" "}
          Welcome back <br /> {firstName} {lastName} !
        </h1>
        <button onClick={() => setForm(!Form)} className="button-edit">
          Edit Name
        </button>
        <div className="infoUser-container">
          <InfoUser
            display={Form}
            userName={userName}
            firstName={firstName}
            lastName={lastName}
          />
        </div>

        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
          button="View transactions"
        />

        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
          button="View transactions"
        />

        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Available Balance"
          button="View transactions"
        />
      </div>
      <Footer />
    </>
  );
}

export default PageUser;
