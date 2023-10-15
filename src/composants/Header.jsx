import "../style/header.css"


function Header(){
    return(
      <div className="header">
            <img src="bank-tree.jpeg" alt="presentation" className="image_presentation"/> 

         <div className="header_info">
         <h2 class="sr-only">Promoted Content</h2>
          <p class="subtitle">No fees.</p>
          <p class="subtitle">No minimum deposit.</p>
          <p class="subtitle">High interest rates.</p>
          <p class="text">Open a savings account with Argent Bank today!</p>
         </div>
         
        </div>
      
    )
   
}

export default Header