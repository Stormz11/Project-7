import React, { useState } from "react";

function UserSignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Sign-Up Data:", formData);
    alert("Form submitted successfully!");
    setFormData({
      fullName: "",
      username: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
      }}
    >
      <h2>User Sign-Up</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Address:
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "8px" }}
            />
          </label>
        </div>
        <button
          type="submit"
          style={{ padding: "10px 20px", background: "blue", color: "#fff" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default UserSignUp;