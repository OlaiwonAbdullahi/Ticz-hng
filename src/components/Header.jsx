
import logo from "../assets/logo.svg"
export default function Header() {
  return (
    <div className="header">
      <div className="brandName">
        <img src={logo}></img>
      </div>
      <ul className="menu">
        <li>Event</li>
        <li>My Tickets</li>
        <li>About Project</li>
      </ul>
      <button className="ticketBtn">MY TICKET →</button>
    </div>
  );
}