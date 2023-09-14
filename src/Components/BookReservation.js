import React, { useState } from 'react';
import axios from 'axios';

// Import your AIR University image here
import airUniversityImage from './air_university_image.jpg';

const BookReservation = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        cnic: '',
        department: '',
        purpose: '',
        email: '',
        date: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('clicked');
        axios.post('https://64fda739596493f7af7e69aa.mockapi.io/CRUD', formData, {
            headers: { 'Access-Control-Allow-Origin': '*' },
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div
            className="container-fluid p-0 fw-bold"
            style={{
                backgroundImage: `url(${airUniversityImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: '1.0',
            }}
        >
            <form
                className="container bg-light p-4 rounded"
                style={{
                    opacity: '0.9',
                }}
            >
                <h2 className="text-center mb-4">Book a Reservation</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Full Name
                    </label>
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
                    <label htmlFor="phone" className="form-label">
                        Phone Number
                    </label>
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
                    <label htmlFor="cnic" className="form-label" >
                        CNIC Number
                    </label>
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
                    <label htmlFor="department" className="form-label">
                        Department to Visit
                    </label>
                    <input
                        type="text"
                        id="department"
                        className="form-control border border-dark"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="purpose" className="form-label">
                        Purpose of Visit
                    </label>
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
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
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
                    <label htmlFor="date" className="form-label">
                        Select Date of Visit
                    </label>
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
        </div>
    );
};

export default BookReservation;
