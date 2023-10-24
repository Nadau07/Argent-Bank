import ImgPresentation from "../img/bank-tree.jpeg"
import "../style/header.css"


function Header(){
    return(
      <div className="header">
            <img src={ImgPresentation} alt="presentation" className="image_presentation"/> 

         <div className="header_info">
         <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
         </div>
         
        </div>
      
    )
   
}

export default Header