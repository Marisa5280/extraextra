import "./Card.css";

const Card = ({location, description}) => {
  return (
    <div className="card">
      <h3>{location}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Card