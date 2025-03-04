import { useCallback } from "react";
import PriceTag from "./PriceTag";
import TicketSelect from "./TicketInput";

export default function TicketSelection({ handleNext, setSelectedTickets, selectedTickets, selectedOption, setSelectedOption }) {
  const handleSelect = useCallback((option) => {
    setSelectedOption(option);
  }, [setSelectedOption]);

  const handleProceed = () => {
    if (!selectedOption) {
      alert("Please select a ticket type.");
      return;
    }

    if (selectedTickets < 1) {
      alert("Please select at least one ticket.");
      return;
    }

    handleNext();
  };

  return (
    <div className="ticketSelection">
      <div className="banner">
        <h1 className="eventName">Techember Fest '25</h1>
        <p className="eventDescription">Join us for an unforgettable experience!</p>
        <span className="event">📍 [Event Venue] | March 15, 2025 | 7:00 AM</span>
      </div>
      <hr className="hr2" />
      <h6>Select Ticket Type:</h6>

      <div className="optionBtn">
        <button className={`optionBtn1 ${selectedOption === "REGULAR" ? "selected" : ""}`} onClick={() => handleSelect("REGULAR")}>
          <span className="bg">Free</span>
          <span className="bg">REGULAR ACCESS</span>
          <span className="bg">22/50</span>
        </button>

        <button className={`optionBtn2 ${selectedOption === "VIP" ? "selected" : ""}`} onClick={() => handleSelect("VIP")}>
          <span className="bg">$50</span>
          <span className="bg">VIP ACCESS</span>
          <span className="bg">22/50</span>
       
        </button>

        <button className={`optionBtn3 ${selectedOption === "VVIP" ? "selected" : ""}`} onClick={() => handleSelect("VVIP")}>
           <span className="bg">$109</span>
          <span className="bg">VVIP ACCESS</span>
          <span className="bg">22/50</span>
        </button>
      </div>

      <h6>No of Ticket:</h6>
      <TicketSelect selectedTickets={selectedTickets} setSelectedTickets={setSelectedTickets} />

      <div className="ticket-actions">
        <button className="cancel-btn">Cancel</button>
        <button className="next-btn" onClick={handleProceed}>
          {selectedOption === "REGULAR" ? "Get My Free Ticket" : "Proceed to Payment"}
        </button>
      </div>
    </div>
  );
}