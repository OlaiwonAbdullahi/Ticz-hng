import AttendeeHeader from "./AttendeeHeader";
import AttendeeForm from "./AttendeeForm";

export default function AttendeeContainer({ handleNext,handlePrevious, name, setName, email, setEmail, about, setAbout,profileImage, setProfileImage }) {
  return (
    <div>
      <AttendeeHeader>ATTENDEE DETAILS</AttendeeHeader>
      <AttendeeForm 
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
      />
    </div>
  );
}