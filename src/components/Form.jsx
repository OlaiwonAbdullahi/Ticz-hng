import {useState} from "react"
export default function Form({ handleNext, handlePrevious, name, setName, email, setEmail, about, setAbout }) {
  
  const [warn,setWarn]=useState("")
  const validateAndProceed = () => {
    if (!name.trim() || !email.trim() || !about.trim()) {
      setWarn("This field is required!");
      return;
    }
    handleNext(); 
  };

  return (
    <>
      <div className="Form">
        <div>
          <h6>Enter your Name</h6>
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h5>{warn}</h5>
        </div>
        <div>
          <label><h6>Enter your E-mail</h6></label>
          <input
            type="email"
            placeholder="✉️ typeshii@gmail.com"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
           <h5>{warn}</h5>
        </div>
        <div>
          <h6>About the project</h6>
          <textarea
            className="textarea"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
       <h5>{warn}</h5>
        </div>
      </div>

      <div className="ticket-actions">
        <button className="cancel-btn" onClick={handlePrevious}>Back</button>
        <button className="next-btn" onClick={validateAndProceed}>Get My Free Ticket</button>
      </div>
    </>
  );
}