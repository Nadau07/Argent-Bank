import "../style/features.css";

/**
 *
 * @returns {JSX} : Composant affichant les "features" sur la page d'accueil.
 *
 */

function Features(props) {
  return (
    <div className="features">
      <div className="feature-item">
        <img src={props.src} alt="icon" className="feature-icon" />
        <h2 className="feature-title">{props.title}</h2>
        <p className="feature-p">{props.description}</p>
      </div>
    </div>
  );
}

export default Features;
