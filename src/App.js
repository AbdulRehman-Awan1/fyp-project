import React, { useState } from 'react';
import BookReservation from './Components/BookReservation';
import BookedReservations from './Components/BookedReservations';
import NavBar from './Components/NavBar';
import ApprovedReservations from './Components/ApprovedReservations';
import DeletedReservations from './Components/DeletedReservations';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
 
    const [approvedReservations, setApprovedReservations] = useState([]);
    const [deletedReservations, setDeletedReservations] = useState([]);
  
    const handleApprove = (reservation) => {
      setApprovedReservations((prev) => [...prev, reservation]);
    };
  
    const handleDelete = (reservation) => {
      setDeletedReservations((prev) => [...prev, reservation]);
    };

  return (
    <Router>
      <NavBar />
      
      <div className="container text-primary" style={{ marginTop: '20px' }}>
     
        <Routes>
          <Route
            exact
            path="/"
            element={
              <BookReservation
                onApprove={handleApprove}
                onDelete={handleDelete}
              />
            }
          />
          <Route
        path="/booked-reservations"
        element={
          <BookedReservations
            onApprove={handleApprove}
            onDelete={handleDelete}
            setApprovedReservations={setApprovedReservations}
            setDeletedReservations={setDeletedReservations}
          />
            }
          />



          <Route
            path="/approved-reservations"
            element={<ApprovedReservations approvedReservations={approvedReservations} />}
          />
          <Route
            path="/deleted-reservations"
            element={<DeletedReservations deletedReservations={deletedReservations} />}
          />
        </Routes>
        
      </div>
      <ToastContainer/>
      
    </Router>
  );
}

export default App;
