import React, { useState } from "react";
import "./App.css";

function Profile({ user, close, updateUser }) {
  const [editingField, setEditingField] = useState(null);
  const [tempUser, setTempUser] = useState({ ...user });
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || "");

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (field) => {
    updateUser({ ...tempUser, profilePicture });
    setEditingField(null);
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="modal-overlay">
      <div className="modal advanced-modal">
        <button className="close-button" onClick={close}>×</button>
        <h2>Profile</h2>

        <div className="profile-info">
          <label>Profile Picture:</label>
          <div className="profile-picture">
            <img src={profilePicture || "default-profile.png"} alt="Profile" className="circle-image" />
            {editingField === "profilePicture" ? (
              <>
                <input type="file" accept="image/*" onChange={handleProfilePictureUpload} />
                <button className="save-button" onClick={() => handleSave("profilePicture")}>Save</button>
              </>
            ) : (
              <button className="edit-button" onClick={() => setEditingField("profilePicture")}>Edit</button>
            )}
          </div>
        </div>

        <div className="profile-info">
          <label>Name:</label>
          {editingField === "name" ? (
            <>
              <input type="text" name="name" value={tempUser.name} onChange={handleFieldChange} />
              <button className="save-button" onClick={() => handleSave("name")}>Save</button>
            </>
          ) : (
            <>
              <span>{user.name}</span>
              <button className="edit-button" onClick={() => setEditingField("name")}>Edit</button>
            </>
          )}
        </div>

        <div className="profile-info">
          <label>Email:</label>
          {editingField === "email" ? (
            <>
              <input type="email" name="email" value={tempUser.email} onChange={handleFieldChange} />
              <button className="save-button" onClick={() => handleSave("email")}>Save</button>
            </>
          ) : (
            <>
              <span>{user.email}</span>
              <button className="edit-button" onClick={() => setEditingField("email")}>Edit</button>
            </>
          )}
        </div>

        <div className="profile-info">
          <label>Contact:</label>
          {editingField === "contact" ? (
            <>
              <input type="text" name="contact" value={tempUser.contact} onChange={handleFieldChange} />
              <button className="save-button" onClick={() => handleSave("contact")}>Save</button>
            </>
          ) : (
            <>
              <span>{user.contact || "Not provided"}</span>
              <button className="edit-button" onClick={() => setEditingField("contact")}>Edit</button>
            </>
          )}
        </div>

        <div className="profile-info">
          <label>Alternate Mobile:</label>
          {editingField === "alternateMobile" ? (
            <>
              <input type="text" name="alternateMobile" value={tempUser.alternateMobile} onChange={handleFieldChange} />
              <button className="save-button" onClick={() => handleSave("alternateMobile")}>Save</button>
            </>
          ) : (
            <>
              <span>{user.alternateMobile || "Not provided"}</span>
              <button className="edit-button" onClick={() => setEditingField("alternateMobile")}>Edit</button>
            </>
          )}
        </div>

        <div className="profile-info">
          <label>Date of Birth:</label>
          {editingField === "dob" ? (
            <>
              <input type="date" name="dob" value={tempUser.dob} onChange={handleFieldChange} />
              <button className="save-button" onClick={() => handleSave("dob")}>Save</button>
            </>
          ) : (
            <>
              <span>{user.dob || "Not provided"}</span>
              <button className="edit-button" onClick={() => setEditingField("dob")}>Edit</button>
            </>
          )}
        </div>

        <div className="profile-info">
          <label>Password:</label>
          {editingField === "password" ? (
            <>
              <input type="password" name="password" value={tempUser.password} onChange={handleFieldChange} />
              <button className="save-button" onClick={() => handleSave("password")}>Save</button>
            </>
          ) : (
            <>
              <span>••••••••</span>
              <button className="edit-button" onClick={() => setEditingField("password")}>Edit</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
