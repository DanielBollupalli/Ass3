import React, { useState } from "react";
import "./App.css";

function Profile({ user, close, updateUser }) {
  const [editingField, setEditingField] = useState(null);
  const [tempUser, setTempUser] = useState({ ...user });
  const [profilePicture, setProfilePicture] = useState(user.profilePicture || "");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (editingField === "password" && newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    updateUser({
      ...tempUser,
      profilePicture,
      password: editingField === "password" ? newPassword : tempUser.password,
    });
    setEditingField(null);
  };

  const handleProfilePictureUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setProfilePicture(reader.result);
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
                <button className="save-button" onClick={handleSave}>Save</button>
              </>
            ) : (
              <button className="edit-button" onClick={() => setEditingField("profilePicture")}>
                Edit
              </button>
            )}
          </div>
        </div>

        {["name", "email", "contact", "alternateMobile", "dob"].map((field) => (
          <div className="profile-info" key={field}>
            <label>{field.replace(/([A-Z])/g, " $1").trim()}:</label>
            {editingField === field ? (
              <>
                <input type={field === "dob" ? "date" : "text"} name={field} value={tempUser[field]} onChange={handleFieldChange} />
                <button className="save-button" onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <span>{tempUser[field] || "Not provided"}</span>
                <button className="edit-button" onClick={() => setEditingField(field)}>Edit</button>
              </>
            )}
          </div>
        ))}

        <div className="profile-info">
          <label>Password:</label>
          {editingField === "password" ? (
            <>
              <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
              <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              <button className="save-button" onClick={handleSave}>Save</button>
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
