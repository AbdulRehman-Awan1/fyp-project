import React from 'react';
import { getdeletedformdata } from '../api/api';
import { useEffect, useState } from 'react';



const DeletedReservations = () => {



    const [reservations, setReservations] = useState([]);


    useEffect(() => {

        getdata()
    }, []);






    const getdata = async () => {
        try {

            const result = await getdeletedformdata()
            if (result.status == 200) {
                setReservations(result.data)

            }
        } catch (error) {
            console.log("Error getting data from db", error)
        }
    }
    return (
        <div className="container mt-5">
            <h2>Deleted Reservations</h2>
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
                            <td>{reservation.cnic}</td>
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

export default DeletedReservations;
