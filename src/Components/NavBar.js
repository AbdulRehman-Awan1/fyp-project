import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" className="nav-link mr-3" style={{ color: 'white' }}>Home</Link>
      <Nav className="ml-auto">
        <Link to="/booked-reservations" className="nav-link mr-3">Booked Reservations</Link>
        <Link to="/deleted-reservations" className="nav-link mr-3">Deleted Reservations</Link>
        <Link to="/upcoming-reservations" className="nav-link mr-3">Upcoming Reservations</Link>
        <Link to="/approved-reservations" className="nav-link mr-3">Approved Reservations</Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
