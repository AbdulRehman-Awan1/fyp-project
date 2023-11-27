import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { approveformdata, deleteformdata, getformdata } from '../api/api';
import { toast } from 'react-toastify';

const BookedReservations = ({ onApprove, onDelete, setApprovedReservations, setDeletedReservations }) => {
  const [reservations, setReservations] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    // Fetch the booked reservations data from your API or database
    // axios.get('https://64fda739596493f7af7e69aa.mockapi.io/CRUD')
    //   .then((response) => {
    //     setReservations(response.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching reservations:', error);
    //   });
    getdata()
  }, []); // Update the reservations list when a reservation is deleted

  const handleApprove = async (id) => {

    try {
      const result = await approveformdata(id)
      if(result.status===200){
        getdata()
      }

    } catch (error) {
      console.log("error while approving the reservation", error)
    }
  };

  const handleDelete = async (id) => {
    // onDelete(reservation);
    // setDeleteMessage(`Reservation for ${reservation.name} deleted successfully.`);
    // // Filter the reservations to exclude the deleted one
    // setReservations((prevReservations) =>
    //   prevReservations.filter((res) => res.id !== reservation.id)
    // );

    try {
      const result = await deleteformdata(id)
      if(result.status===200){
        getdata()
        toast("Deleted")
      }

    } catch (error) {
      console.log("error while deleting the reservation", error)
    }
    // setDeletedReservations((prev) => [...prev, reservation]);
  };


  const getdata = async () => {
    try {

      const result = await getformdata()
      if (result.status == 200) {
        setReservations(result.data)

      }
    } catch (error) {
      console.log("Error getting data from db", error)
    }
  }
  return (
    <div className="container mt-5">
      <h2>Booked reservations</h2>
      {deleteMessage && <p className="text-success">{deleteMessage}</p>}
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((reservation) => (
            <tr key={reservation.id}>
              <td>{reservation.name}</td>
              <td>{reservation.phone}</td>
              <td>{reservation.cnic}</td>
              <td>{reservation.department}</td>
              <td>{reservation.purpose}</td>
              <td>{reservation.email}</td>
              <td>{reservation.date}</td>
              <td>
                <button
                  onClick={() => handleApprove(reservation.id)}
                  className="btn btn-success mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleDelete(reservation.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookedReservations;
