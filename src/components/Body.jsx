import IconChat from "../img/icon-chat.webp";
import IconMoney from "../img/icon-money.webp";
import IconSecurity from "../img/icon-security.webp";
import "../style/body.css";

/**
 *
 * @returns {JSX} : Composant affichant le contenu de la page d'accueil.
 *
 */

function Body() {
  return (
    <>
      <div className="features">
        <div className="feature-item">
          <img src={IconChat} alt="icone chat" className="feature-icon" />
          <h3 className="feature-item-title">You are our #1 priority</h3>
          <p className="feature-item-p">
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>

        <div className="feature-item">
          <img src={IconMoney} alt="icone money" className="feature-icon" />
          <h3 className="feature-item-title">
            {" "}
            More savings means higher rates
          </h3>
          <p className="feature-item-p">
            {" "}
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>

        <div className="feature-item">
          <img
            src={IconSecurity}
            alt="icone security"
            className="feature-icon"
          />
          <h3 className="feature-item-title">Security you can trust</h3>
          <p className="feature-item-p">
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </div>
    </>
  );
}

export default Body;
