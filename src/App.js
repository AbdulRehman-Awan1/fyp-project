// import logo from './logo.svg';
import './App.css';
import BookReservation from './Components/BookReservation';
import BookedReservations from './Components/BookedReservations';
import NavBar from './Components/NavBar';

function App() {
  return (
      <>
       {/* <NavBar/> */}
       <div className="container  text-primary" >
       {/* <BookReservation/> */}
       <BookedReservations/>
       </div>
     
  
      </>
  );
}

export default App;
