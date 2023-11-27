import React, { useState } from 'react';
import axios from 'axios';
import { Container, Toast } from 'react-bootstrap';
import airUniversityImage from './air_university_image.jpg';
import { postformdata } from '../api/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const BookReservation = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    cnic: '',
    department: '',
    purpose: '',
    email: '',
    date: '',
  });
  const [reservationStatus, setReservationStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation for CNIC and Name
    if (!formData.name || !formData.cnic) {
      alert('Name and CNIC are mandatory fields. Please enter both.');
      return;
    }

    try {
      const result= await postformdata(formData)
      // Add your API call logic here
      // await axios.post('https://64fda739596493f7af7e69aa.mockapi.io/CRUD', formData, {
        // headers: { 'Access-Control-Allow-Origin': '*' },
      // });

      // Display success message
      setReservationStatus('Reservation done!');

      // Reset the form
      setFormData({
        name: '',
        phone: '',
        cnic: '',
        department: '',
        purpose: '',
        email: '',
        date: '',
      });
      toast("reservation booked")
      navigate("/booked-reservations")
    } catch (error) {
      console.error('Error submitting reservation:', error);
      // You can handle errors here and show an error message if needed
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container fluid className="p-0 fw-bold" style={{
      backgroundImage: `url(${airUniversityImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: '1.5',
      position: 'relative',
    }}>
      <form className="container bg-light p-4 rounded" style={{
        opacity: '0.9',
        width: '80%',
        color: 'black'
      }}>
        <h2 className="text-center mb-4">Book a Reservation</h2>
        {reservationStatus && (
          <div className="alert alert-success" role="alert">
            {reservationStatus}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            id="name"
            className="form-control border border-dark"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="text"
            id="phone"
            className="form-control border border-dark"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="cnic" className="form-label">CNIC Number</label>
          <input
            type="text"
            id="cnic"
            className="form-control border border-dark"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="department" className="form-label">Department to Visit</label>
          <select
            id="department"
            className="form-control border border-dark"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select Department</option>
            <option value="CS">CS</option>
            <option value="FMC">FMC</option>
            <option value="LTC">LTC</option>
            <option value="A block">A block</option>
            <option value="C block">C block</option>
            <option value="AUSOM">AUSOM</option>
            <option value="B block">B block</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="purpose" className="form-label">Purpose of Visit</label>
          <input
            type="text"
            id="purpose"
            className="form-control border border-dark"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            id="email"
            className="form-control border border-dark"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">Select Date of Visit</label>
          <input
            type="date"
            id="date"
            className="form-control border border-dark"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </Container>
  );
};

export default BookReservation;
