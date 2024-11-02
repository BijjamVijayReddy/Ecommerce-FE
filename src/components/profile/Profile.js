import React, { useState } from 'react';
import './Profile.css';
import AppFooter from '../appFooter/AppFooter';
import AppHeader from '../appHeader/AppHeader';

const Profile = () => {
  const [user, setUser] = useState({
    avatar: 'https://via.placeholder.com/150', // Placeholder image
    firstName: '',
    lastName: '',
    phone: '',
    alternatePhone: '',
    email: '',
    password: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveClick = () => {
    // Add validation and API call here
    setIsEditing(false);
  };
  const handleCancelClick = () => setIsEditing(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
  
   
    <div className="profile-container">
      {/* <AppHeader /> */}
    <div className="avatar-section">
        <img src={user.avatar} alt="Avatar" className="avatar" />
        <p>Name</p>
      </div>

      <div className="profile-fields">
        <div className="profile-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="phone-fields">
        <div className="profile-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
        <div className="profile-group">
          <label>Alternate Phone Number</label>
          <input
            type="tel"
            name="alternatePhone"
            value={user.alternatePhone}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </div>
      </div>

      <div className="profile-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>

      <div className="profile-group">
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleInputChange}
          disabled={!isEditing}
        />
      </div>

      <div className="coo-group">
        {isEditing ? (
          <>
            <button onClick={handleSaveClick} className="profile-button">Save</button>
            <button onClick={handleCancelClick} className="procan-button">Cancel</button>
          </>
        ) : (
          <button onClick={handleEditClick} className="proedi-button">Edit</button>
        )}
        
      </div>
     
   </div>
   
  
     
  );

};
<AppFooter/>

export default Profile;

