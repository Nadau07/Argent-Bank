import { useState } from "react";
import { useEffect } from "react";
import Features from "./Features";
import "../style/body.css";

/**
 *
 * @returns {JSX} : Composant affichant le contenu de la page d'accueil.
 *
 */

function Body() {

  const [features, setFeatures] = useState([])

  useEffect(() => {
    fetch("features.json")
      .then((response) => response.json())
      .then((response) => setFeatures(response))
      .catch(console.error);
  }, []);
  return (
    <div className="body-feature">
    {features.map((item)=>(
      <Features
      key={item.id}
      src={item.src}
      title={item.title}
      description={item.description}/>
    ))}
    </div>
  );
}

export default Body;
