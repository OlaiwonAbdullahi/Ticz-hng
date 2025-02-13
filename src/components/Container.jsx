import TicketSelectionContainer from "./TicketSelectionContainer";
import AttendeeContainer from "./AttendeeContainer";
import Ready from "./Ready";
import { useState } from "react";

export default function Container() {
  const [step, setStep] = useState(1);
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [about,setAbout]=useState("")
const [selectedTickets, setSelectedTickets] = useState(1);
const [selectedOption, setSelectedOption] = useState("REGULAR");
const [profileImage, setProfileImage] = useState(null);
  

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  const pages = [
    <TicketSelectionContainer key="1" handleNext={handleNext} 
    selectedTickets={selectedTickets}
    setSelectedTickets={setSelectedTickets}
    selectedOption={selectedOption}
    setSelectedOption={setSelectedOption}
    />,<AttendeeContainer 
  handleNext={handleNext} 
  handlePrevious={handlePrevious}
  name={name} 
  setName={setName}
  email={email} 
  setEmail={setEmail}
  about={about} 
  setAbout={setAbout}
  profileImage={profileImage} 
  setProfileImage={setProfileImage} 
/>,
    <Ready key="3" handlePrevious={handlePrevious} 
    name={name} 
    email={email}
    about={about}
    selectedTickets={selectedTickets}
    selectedOption={selectedOption}
    profileImage={profileImage}
    />,
  ];

  return <div className="Container">{pages[step - 1]}</div>;
}