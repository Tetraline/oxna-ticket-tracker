import "./Card.scss";
import { useState } from "react";

const Card = ({ id, name, role, confetti }) => {
  const [tickets, setTickets] = useState(0);

  const handleIncrement = () => {
    setTickets(tickets + 1);
    confetti();
  };

  const handleDecrement = () => {
    if (tickets > 0) {
      setTickets(tickets - 1);
    }
  };

  return (
    <div key={id} className="card">
      <small className="card__person-id">{id}</small>
      <h2 className="card__person-info">{name}</h2>
      <h2 className="card__person-info">{role}</h2>
      <h2 className="card__person-info">
        Tickets:{" "}
        <span
          className={
            tickets > 2
              ? "card__person-info card__person-info--number card__person-info--number-green"
              : "card__person-info card__person-info--number"
          }
        >
          {tickets}
        </span>
      </h2>
      <button onClick={handleIncrement} className="card__button">
        ➕
      </button>
      <button onClick={handleDecrement} className="card__button">
        ➖
      </button>
    </div>
  );
};

export default Card;
