import React, { useState } from "react";

const UserProfile = ({ theme }) => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "abc", email: "abc@gmail.com", designation: "Developer" },
    { id: 2, name: "admin", email: "admin@gmail.com", designation: "Owner" },
    { id: 3, name: "User", email: "user@gmail.com", designation: "User" },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [formData, setFormData] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleEdit = (profile) => {
    setSelectedProfile(profile);
    setFormData({ ...profile });
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isConfirmed) {
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.email === selectedProfile.email ? formData : profile
        )
      );
      setIsEditing(false);
      setIsConfirmed(false);
    } else {
      alert("Please confirm the changes before saving.");
    }
  };

  const isLightTheme = theme === "light";

  return (
    <div
      className={`container-fluid d-flex flex-column align-items-center py-4 ${
        isLightTheme ? "bg-light" : "bg-dark"
      }`}
    >
      {!isEditing ? (
        <table
          className={`table table-striped ${
            isLightTheme ? "table-light" : "table-dark"
          } w-75`}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.name}</td>
                <td>{profile.email}</td>
                <td>{profile.designation}</td>
                <td>
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEdit(profile)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <form onSubmit={handleSubmit} className="w-75">
          <div className="mb-3">
            <label className="form-label">Name:</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Designation:</label>

            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              checked={isConfirmed}
              onChange={(e) => setIsConfirmed(e.target.checked)}
              className="form-check-input"
            />

            <label className="form-check-label">Confirm Changes</label>
          </div>

          <button type="submit" className="btn btn-primary me-2">
            Save Changes
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
