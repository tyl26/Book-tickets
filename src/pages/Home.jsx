import { Link } from "react-router-dom";

function Home() {
  
  return (
    <section className="homeContainer">
      <img
        className="logoImg"
        src="https://media.discordapp.net/attachments/905772656580784183/952917187931275274/logo.png?width=606&height=593"
        alt=""
      />
      <h1 className="main-title">Where is @</h1>
      <h4 className="intro">Ticketing made easy</h4>

      <button className="bookBtn" >
        <Link className="bookTickets" to="/AllTickets">
          Book Tickets
        </Link>
      </button>

      <section className="allDots">
        <div className="dot" id="dotOne"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </section>
    </section>
  );
}

export default Home;
