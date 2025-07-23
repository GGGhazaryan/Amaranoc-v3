export default function Card({ card }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${card.image})` }}>
      <div className="cardInfo">
        <h3>{card.title}</h3>
        <p>{card.price}</p>
        <p>{card.location}</p>
        <p>{card.people}</p>
      </div>
    </div>
  );
}
