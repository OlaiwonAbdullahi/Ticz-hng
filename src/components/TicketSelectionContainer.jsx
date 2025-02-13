
import ContainerHeader from "./ContainerHeader";
import TicketSelection from "./TicketSelection";

export default function TicketSelectionContainer({handleNext, setSelectedTickets, selectedTickets,selectedOption, setSelectedOption}) {
  return (
    <div>
      <ContainerHeader>TICKET SELECTION</ContainerHeader>
      
      <TicketSelection handleNext={handleNext} 
      setSelectedTickets={setSelectedTickets}
      selectedTickets={selectedTickets}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      />
    </div>
  );
}