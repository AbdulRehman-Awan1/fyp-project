import React , {useState}from 'react'
import axios from 'axios'

const BookReservation = () => {

    const [name, setName] =useState("")
    const [phone, setPhone] =useState("")
    const [CNIC, setCNIC] =useState("")
    const [department, setDepartment] =useState("")
    const [purpose, setPurpose] =useState("")
    const [email, setEmail] =useState("")
    const [date, setDate] =useState("")

    const header = {"Access-Control-Allow-Origin": "*"};

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log("clicked");
        axios.post("https://64fda739596493f7af7e69aa.mockapi.io/CRUD" , {
            name: name,
            phone: phone,
            CNIC:CNIC,
            department: department,
            purpose:purpose,
            email: email,
            date:date,
            header,



        });
    }
    
    return (
        <>
            <div >
                <form>

                    <div className="mb-3">
                        <label >Full Name</label>
                        <input className="form-control" 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label >Phone Number</label>
                        <input className="form-control" 
                         onChange={(e) => setPhone(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label >CNIC Number</label>
                        <input className="form-control"
                         onChange={(e) => setCNIC(e.target.value)} />
                    </div>

                    <div className="mb-3">
                        <label >Department to Visit</label>
                        <input className="form-control"
                         onChange={(e) => setDepartment(e.target.value)} />
                    </div>

                    <div class="mb-3">
                        <label className="form-label">Purpose of visit</label>
                        <input className="form-control"
                         onChange={(e) => setPurpose(e.target.value)} />
                    </div>


                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" 
                         onChange={(e) => setEmail(e.target.value)}/>
                        
                    </div>
                    
                    <div className='mb-3'>
                        <label>Select date of visit---</label>
                        <input type="date"
                         onChange={(e) => setDate(e.target.value)} />
                    </div>
                    {name}
                    {purpose}
                    {CNIC}
                   

                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default BookReservation
