import React, { useState } from 'react';
import './XModal.css';

const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    dob: false,
    phone: false
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    setErrors({
      ...errors,
      [id]: false
    });
  };

  const validate = () => {
    const newErrors = {
      username: !formData.username,
      email: !formData.email.includes('@'),
      dob: new Date(formData.dob) > new Date(),
      phone: formData.phone.length !== 10 || isNaN(formData.phone)
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      setFormData({
        username: '',
        email: '',
        dob: '',
        phone: ''
      });
      closeModal();
    } else {
      if (errors.email) {
        alert('Invalid email. Please check your email address.');
      }
      if (errors.phone) {
        alert('Invalid phone number. Please enter a 10-digit phone number.');
      }
      if (errors.dob) {
        alert('Invalid date of birth. Please enter a valid date of birth.');
      }
    }
  };

  return (
    <div>
      <h1>User Details Modal</h1>
      <button onClick={openModal}>Open Form</button>
      {isOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
              <div style={{fontWeight:"bold"}}>Fill Details</div>
              <div>
                <label>Username:</label><br/>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && <span>Please fill out this field.</span>}
              </div>
              <div>
                <label>Email:</label><br/>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span>Please fill out this field.</span>}
              </div>
              <div>
                <label>Date of Birth:</label><br/>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                />
                {errors.dob && <span>Please fill out this field.</span>}
              </div>
              <div>
                <label>Phone Number:</label><br/>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.phone && <span>Please fill out this field.</span>}
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default XModal;
