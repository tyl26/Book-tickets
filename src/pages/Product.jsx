import { ListContext } from "../components/ListContext";
import { useContext } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Product({ name, date, to, price, where }) {
  let { addProduct, orders, setOrders } =
    useContext(ListContext);

  const location = useLocation();
  const { from } = location.state;

  const [localState, setLocalState] = useState(1);
  const [localDisabled, setlocalDisabled] = useState(true);

  const localStateDecrement = (product) => {
    const addedOrder = orders.find((from) => from.name === product.name);

    if (localState === 1) {
      console.log(localState)
      setlocalDisabled(true);
    } else {
      setLocalState((prevCount) => prevCount - 1);
      setOrders(
        orders.map((from) =>
          from.name === product.name
            ? { ...addedOrder, quantity: addedOrder.quantity - 1 }
            : from
        )
      );
    }
  };

  const localStateIncrement = (product) => {
    setLocalState((prevCount) => prevCount + 1);
    const addedOrder = orders.find((from) => from.name === product.name);
    if (addedOrder) {
      setOrders(
        orders.map((from) =>
          from.name === product.name
            ? { ...addedOrder, quantity: addedOrder.quantity + 1 }
            : from
        )
      );
    } else {
      setOrders([...orders, { ...product, quantity: 1 }]);
    }
  };

  return (
    <section>
      <section className="mainContainer">
        <h1 className="title">Event</h1>
        <p className="eventIntro">You are about to score some tickets too</p>
        <section className="eventTicket">
          <h6 className="eventName">{from.name}</h6>
          <p className="eventWhen">
            {from.date} {from.from} - {from.to}
          </p>
          <p className="eventPlace">@{from.place}</p>
        </section>

        <section className="priceContainer">
          <section className="eventPrice">
            {from.price * localState} SEK
          </section>

          <section className="ticketsCount">
            <div
              disabled={localDisabled}
              className="ticketButton"
              onClick={() => {
                localStateDecrement(from);
              }}
            >
              -
            </div>
            <div className="ticketNumber">{localState}</div>
            <div
              className="ticketButton"
              onClick={() => {
                localStateIncrement(from);
              }}
            >
              +
            </div>
          </section>
        </section>

        <section>
          <button
            className="bookBtnOrder cartBookTickets"
            id="btnOrder"
            onClick={() => addProduct(from)}
          >
            <Link
              to="/Order"
              state={{ from: { date, name, where, from, to, price } }}
              className="bookTickets"
            >
              Lägg i varukorgen
            </Link>
          </button>
        </section>

        <section className="allDots">
          <div className="dot" id="dotOne" style={{ opacity: 1 }}></div>
          <div className="dot" id="dotTwo" style={{ opacity: 1 }}></div>
          <div className="dot" id="dotThree" style={{ opacity: 0.3 }}></div>
        </section>
      </section>
    </section>
  );
}

export default Product;
