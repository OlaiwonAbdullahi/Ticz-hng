//import { QRCode } from "react-qrcode-logo"; // Alternative: import QRCode from "qrcode.react";
import Ticket from "./TicketIcon";
import ReadyHeader from "./ReadyHeader";

export default function Ready({ name, email, about, selectedTickets, selectedOption }) {
  return (
    <div>
      <ReadyHeader>Ready</ReadyHeader>
      <div>
        <h2>Your Ticket Is Booked</h2>
        <p>You can download or check your mail for a copy</p>
      </div>

      <div className="ticket">
        <div className="ticketBackground"></div>
        <div className="ticketContent">
          <div className="qrCode" style={{padding: "1px" }}>
       {/*    <QRCode value={email || "default@example.com"} size={128} />*/}
          </div>
          <div className="eventDetails">
            <h3 className="bg">Techember Fest '25</h3>
            <p className="bg">📍 04 Rumens road, Ikoyi, Lagos</p>
            <p className="bg">
              <span className="dateDot"></span>March 15, 2025 | 7:00 PM
            </p>
          </div>
          <div className="verticalText">Techember Fest '25</div>
        </div>
        <div className="ticketFooter">* Ticket is valid only</div>
      </div>

      <div>
        <h6>Email: {email}</h6>
        <h6>Name: {name}</h6>
        <h6>About: {about}</h6>
        <h6>No of tickets: {selectedTickets}</h6>
        <h6>Selected ticket: {selectedOption}</h6>
      </div>

      <div className="ticket-actions">
        <button className="cancel-btn">Book Another Ticket</button>
        <button className="next-btn">Download</button>
      </div>
    </div>
  );
}