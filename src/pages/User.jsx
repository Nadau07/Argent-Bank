import React from "react";
import Banner from "../components/Banner";
import Account from "../components/Account";
import Footer from "../components/Footer";
import EditUser from "../components/EditUser";


function PageUser(){
    return(
<>
<Banner/>
<EditUser/>
<Account />
<Footer />

</>
    )
}

export default PageUser