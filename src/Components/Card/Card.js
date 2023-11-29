import { Link, Navigate } from "react-router-dom";
import "./Card.css";
// I need the click of the card to set selectedArticle with props headline, image, date, content, source
const Card = ({ image, title, description, content, date, setSelectedArticle }) => {

  return (
    <Link className="card" to={`/${date}`}>
      <div>
        <img src={image} alt=" "></img>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>published: {date}</p>
      </div>
    </Link>
  );
};

export default Card;
