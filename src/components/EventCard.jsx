import { Link } from "react-router-dom";
import React from "react";

function Card({ date, name, place, from, to, price, event, state }) {
  return (
    <section className="eventContainer">
      <h6 className="date">{date}</h6>
      <article className="info">
        <h2 className="name">{name}</h2>
        <h6 className="place">{place}</h6>
        <p className="time">
          {" "}
          {from} - {to}
        </p>
      </article>
      <article className="bookEvent">
        <button className="bookBtn" id="btn">
          <Link
            className="bookTickets"
            state={{from: {date, name, place, from, to, price, event, state }}}
            to="/Product"
          >
            Book
          </Link>
        </button>
        <h6 className="price">{price} sek</h6>
      </article>
    </section>
  );
}

export default Card;
