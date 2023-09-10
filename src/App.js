// import logo from './logo.svg';
import './App.css';
import BookReservation from './Components/BookReservation';
import NavBar from './Components/NavBar';

function App() {
  return (
      <>
       <NavBar/>
       <div className="container d-flex justify-content-center bg-success text-white " >
       <BookReservation/>
       </div>
     
  
      </>
  );
}

export default App;
