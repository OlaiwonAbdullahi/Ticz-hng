import { Link } from "react-router-dom";
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
        <Link to="/about">
        <li>About Project</li></Link>
      </ul>
      <button className="ticketBtn">MY TICKET →</button>
    </div>
  );
}