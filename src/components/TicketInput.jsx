import { useState } from "react";

const TicketSelect = ({selectedTickets, setSelectedTickets}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ticketOptions = [1, 2, 3, 4];

  const handleSelect = (ticket) => {
    setSelectedTickets(ticket);
    setIsOpen(false);
  };

  return (
    <div className="ticket-select-container">
      
      <button className="ticket-dropdown" onClick={() => setIsOpen(!isOpen)}>
        <span>{selectedTickets}</span>
        <div className="dropdown-icon">V</div>
      </button>

      {isOpen && (
        <ul className="ticket-options">
          {ticketOptions.map((ticket, index) => (
            <li key={index} className="ticket-option" onClick={() => handleSelect(ticket)}>
              {ticket}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default TicketSelect;