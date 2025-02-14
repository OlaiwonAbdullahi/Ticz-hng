export default function Form ({handleNext,handlePrevious,name,setName,email,setEmail,about,setAbout}){
  return(
    <>
    <div className="Form">
      <div>
      <h6>Enter your Name</h6>
      <input type="text" className=" input" value={name}   
      required
      onChange={(e) => setName(e.target.value)}/>
      </div>
       <div>
      <label><h6>Enter your E-mail</h6></label>
      <input type="email" placeholder="✉️ typeshii@gmail.com" className=" input" value={email}     
      required
      onChange={(e) => setEmail(e.target.value)}/>
      </div>
 <div>
      <h6>About the project</h6>
      <textarea className="textarea" value={about}   
      required
      onChange={(e) => setAbout(e.target.value)}></textarea>
      </div>
    </div>
          
      <div className="ticket-actions">
        <button className="cancel-btn" onClick={handlePrevious}>Back</button>
        <button className="next-btn" onClick={handleNext}>Get My Free Ticket</button>
      </div>
      </>
    )
}