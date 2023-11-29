import "./Card.css";

const Card = ({ image, title, description, date}) => {
  return (
    <div className="card">
      <img src={image}></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>published: {date}</p>
    </div>
  )
}

export default Card