import { useContext } from "react";
import { ListContext } from "../components/ListContext";
import { useState } from "react";
import Card from "../components/EventCard";

function AllTickets() {
  let { events } = useContext(ListContext);
  const [searchEvent, setSearchEvent] = useState("");

  return (
    <section className="allTicketsInfo">
      <h1 className="title">Event</h1>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setSearchEvent(e.target.value);
        }}
      />
      {events
        .filter((event) => {
          if (searchEvent === "") {
            return event;
          } else if (
            event.name.toLowerCase().includes(searchEvent.toLowerCase())
          ) {
            return event;
          }
        })
        .map((event) => (
          <Card
            event={event}
            date={event.when.date}
            from={event.when.from}
            to={event.when.to}
            name={event.name}
            place={event.where}
            price={event.price}
            key={event.name}
          />
        ))}

      <section className="allDots">
        <div className="dot" id="dotOne" style={{ opacity: 1 }}></div>
        <div className="dot" id="dotTwo" style={{ opacity: 0.3 }}></div>
        <div className="dot" id="dotThree"></div>
      </section>
    </section>
  );
}

export default AllTickets;
