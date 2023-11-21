import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookedReservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        // Fetch the booked reservations data from your API or database
        axios.get('https://64fda739596493f7af7e69aa.mockapi.io/CRUD')
            .then((response) => {
                setReservations(response.data);
            })
            .catch((error) => {
                console.error('Error fetching reservations:', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Booked reservations</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>CNIC</th>
                        <th>Department</th>
                        <th>Purpose</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{reservation.name}</td>
                            <td>{reservation.phone}</td>
                            <td>{reservation.CNIC}</td>
                            <td>{reservation.department}</td>
                            <td>{reservation.purpose}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookedReservations;
