// import logo from './logo.svg';
import './App.css';
import BookReservation from './Components/BookReservation';
import NavBar from './Components/NavBar';

function App() {
  return (
      <>
       <NavBar/>
       <div className="container  text-primary" >
       <BookReservation/>
       </div>
     
  
      </>
  );
}

export default App;
