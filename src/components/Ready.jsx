import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import Ticket from "./TicketIcon";
import ReadyHeader from "./ReadyHeader";

export default function Ready({ name, email, about, selectedTickets, selectedOption,profileImage }) {
  
  const handleAnother =()=>{
  window.location.reload();
    
  }
  const handleDownload = () => {
    const ticketElement = document.getElementById("ticket-section"); //

    toPng(ticketElement, { quality: 1 }) 
      .then((dataUrl) => {
        saveAs(dataUrl, "Techember_Ticket.png");
      })
      .catch((err) => {
        console.error("Error generating image:", err);
      });
  };

  return (
    <div className="ready">
      <ReadyHeader>Ready</ReadyHeader>
      <div>
        <h2>Your Ticket Is Booked</h2>
        <p>You can download or check your mail for a copy</p>
      </div>

      {/* Ticket Section */}
      <div className="ticket" id="ticket-section">
        <div className="ticketBackground"></div>
        <br></br>
          <br></br>
         <br></br>
        <br></br>
          <br></br>
        <div className="ticketContent">
          <div className="eventDetails">
            <h3 className="bg detail">Techember Fest '25</h3>
            <p className="bg detail">📍 04 Rumens road, Ikoyi, Lagos</p>
            <p className="bg detail">📅 March 15, 2025 | 7:00 PM</p>
          </div>

          <div className="qrCode" style={{ padding: "1px" }}>
            <img src={profileImage} className="ticketImg"></img>
          </div>

          <div className="bg readyTicketContainer">
            <div className="flexcon bg" style={{ width: "100%" }}>
              <h6 className="bg" style={{ flex: 1, textAlign: "left" }}>
                <span className="bg smallLabel">Name: </span><br /> {name}
              </h6>
              <h6 className="bg" style={{ flex: 1, textAlign: "right" }}>
                <span className="bg smallLabel">Email: </span><br /> {email}
              </h6>
            </div>

            <div className="flexcon bg" style={{ width: "100%" }}>
              <h6 className="bg" style={{ flex: 1, textAlign: "left" }}>
                <span className="bg smallLabel">Ticket No: </span><br /> {selectedTickets}
              </h6>
              <h6 className="bg" style={{ flex: 1, textAlign: "right" }}>
                <span className="bg smallLabel">Ticket Type: </span><br /> {selectedOption}
              </h6>
            </div>
          </div>
        </div>
       
                <br></br>
          <br></br>
         <br></br>
        <br></br>
          <br></br>
          <br></br>
      </div>

      {/* Ticket Actions */}
      <div className="ticket-actions">
        <button className="cancel-btn"onClick={handleAnother}>Book Another Ticket</button>
        <button className="next-btn" onClick={handleDownload}>Download</button>
      </div>
    </div>
  );
}