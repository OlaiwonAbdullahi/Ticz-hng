import { useState } from "react";
import axios from "axios";
import upload from "../assets/upload.svg";
import times from "../assets/times.svg";
import Form from "./Form.jsx";

export default function AttendeeForm({
  handleNext, handlePrevious, name, setName, email, setEmail, about, setAbout, profileImage, setProfileImage
}) {
  
  const [loading, setLoading] = useState(false);

  async function uploadImage(event) {
    const file = event.target.files[0]; 
    if (!file) return;

    setLoading(true);
    
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Ticz-hng"); 
    formData.append("cloud_name", "du7ljfa63"); 

    try {
      const response = await axios.post("https://api.cloudinary.com/v1_1/du7ljfa63/image/upload", formData);
      setProfileImage(response.data.secure_url); 
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  }

  function removeImage() {
    setProfileImage(null);
  }

  return (
    <div>
      <div className="formContainer">
        <h6>Upload Profile Photo:</h6>
        <div className="image-container">
          <div className="custom-uploader">
            {profileImage ? (
              <div className="uploaded-image">
                <img src={profileImage} alt="Profile" style={{ width: 200, height: 180 ,borderRadius:2,}} />
                <button className="bg" onClick={removeImage} >
                  <img src={times} alt="Delete" style={{ width: 25, height: 25}} />
                </button>
              </div>
            ) : (
              <label className="upload-btn">
                <input type="file" accept="image/*" onChange={uploadImage} hidden />
                <img src={upload} alt="Upload" style={{ width: 40, height: 40 }} />
                <p className="upload-label">{loading ? "Uploading..." : "Upload your picture"}</p>
              </label>
            )}
          </div>
        </div>
      </div>
      <hr className="hr1" />
      <Form handleNext={handleNext} handlePrevious={handlePrevious}
        name={name} setName={setName}
        email={email} setEmail={setEmail}
        about={about} setAbout={setAbout} />
    </div>
  );
}