import { ListContext } from "../components/ListContext";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

export default function Receipt() {
  const location = useLocation();
  const { from } = location.state;
  let { orders } = useContext(ListContext);

  return (
    <section className="receipt">
      {orders.map((order) => (
        <section className="receiptCard" key={order.name}>
          <h5 className="itemType">WHAT</h5>
          <h1 className="orderTitle" id="dottedLine">
            {order.name}
          </h1>

          <h5 className="itemType">WHERE</h5>
          <p className="placeName">{order.place}</p>
          <p className="adress">Göteborgs universitet. Pedagogen, hus A</p>

          <section className="whenContainer">
            <div>
              <h5 className="whenTitle">WHEN</h5>
              <h5 className="orderDate">{order.date}</h5>
            </div>
            <div className="from">
              <h5 className="fromTitle">FROM</h5>
              <h5 className="orderFrom">{order.from}</h5>
            </div>
            <div>
              <h5 className="toTitle">TO</h5>
              <h5 className="orderTo">{order.to}</h5>
            </div>
          </section>

          <h5 className="itemType">INFO</h5>
          <p className="sectionPlace">Section C - seat 233, bring umbrella</p>
        </section>
      ))}

      <section className="barcodeContainer">
        <section className="totalPrice">
          Receipt - {from.totalPrice} SEK
        </section>
        <img
          className="barcode"
          src="https://svgsilh.com/svg/306926.svg"
          alt="barcode"
        />
        <h6 className="barNumber">#A2ED7</h6>
      </section>
    </section>
  );
}
