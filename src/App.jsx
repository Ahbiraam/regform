import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.address) errors.address = 'Address is required';
    if (!formData.mobile) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = 'Mobile number must be 10 digits';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.dob) errors.dob = 'Date of birth is required';
    if (!formData.course) errors.course = 'Course selection is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert(`Data stored successfully:
Name: ${formData.name}
Address: ${formData.address}
Mobile: ${formData.mobile}
Email: ${formData.email}
Gender: ${formData.gender}
Date of Birth: ${formData.dob}
Course: ${formData.course}`);
      setErrors({});
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({});
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-warning text-white">
          <h4>Higher Secondary Admission Form</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="address"
                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                value={formData.address}
                onChange={handleChange}
              ></textarea>
              {errors.address && <div className="invalid-feedback">{errors.address}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile</label>
              <input
                type="text"
                name="mobile"
                className={`form-control ${errors.mobile ? 'is-invalid' : ''}`}
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && <div className="invalid-feedback">{errors.mobile}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                name="gender"
                className={`form-select ${errors.gender ? 'is-invalid' : ''}`}
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                value={formData.dob}
                onChange={handleChange}
              />
              {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label">Course</label>
              <select
                name="course"
                className={`form-select ${errors.course ? 'is-invalid' : ''}`}
                value={formData.course}
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="Biology">Biology</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Commerce">Commerce</option>
                <option value="Humanities">Humanities</option>
              </select>
              {errors.course && <div className="invalid-feedback">{errors.course}</div>}
            </div>

            <div className="d-flex justify-content-between">
              <button type="submit" className="btn btn-success">
                Register
              </button>
              <button type="button" className="btn btn-danger" onClick={handleReset}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
