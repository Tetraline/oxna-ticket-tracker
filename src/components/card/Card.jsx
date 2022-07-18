import "./Card.scss";

const Card = ({ team }) => {
  const teamJSX = team.map(({ id, name, role }) => {
    return (
      <div key={id} className="card">
        <small className="card__person-id">{id}</small>
        <h2 className="card__person-info">{name}</h2>
        <h2 className="card__person-info">{role}</h2>
      </div>
    );
  });
  return <>{teamJSX}</>;
};

export default Card;
