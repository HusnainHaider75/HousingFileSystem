import "./newUser.css";
import { useState } from "react";
import axios from 'axios';
export default function NewUser() {

  const LoggedInUser = JSON.parse(localStorage.getItem("auth0spajs"));

  const [User, SetUser] = useState({ RegistrationNo:"", IntinitationLetterSerial:"", 
  BookingFormSerial:"", CreatedBy:`${LoggedInUser.email}`});

  let name, value;
  function HandleInputs(e){
    name = e.target.name;
        value = e.target.value;

        SetUser({ ...User, [name]: value })
        console.log(User);
  }

  async function SubmitUser(){
    const result = await axios.post('http://localhost:4000/createuser', User);
    if (result.data) {
        alert("Created Successfully!");
    }
    else {
        alert("Front-End Error!")
    }
  }



  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <div className="newUserForm">
        <div className="newUserItem">
          <label>Registration Number</label>
          <input required type="text" placeholder="john" name="RegistrationNo" onChange={(e)=>HandleInputs(e)}/>
        </div>
        <div className="newUserItem">
          <label>Intinitation Letter Serial</label>
          <input type="text" placeholder="Intinitation Letter Serial" name="IntinitationLetterSerial" onChange={(e)=>HandleInputs(e)}/>
        </div>
        <div className="newUserItem">
          <label>Booking Form Serial</label>
          <input type="text" placeholder="BookingFormSerial" name="BookingFormSerial" onChange={(e)=>HandleInputs(e)}/>
        </div>
        <div className="newUserItem">
          <label>Created By</label>
          <input type="email" name="CreatedBy" value={LoggedInUser.email} />
        </div>
        <div className="newUserItem">
          <label>Temp</label>
          <input type="text" placeholder="Temp" onChange={(e)=>HandleInputs(e)}/>
        </div>
        <div className="newUserItem">
          <label>Temp</label>
          <input type="text" placeholder="Temp" onChange={(e)=>HandleInputs(e)}/>
        </div>
        </div>
        <button className="newUserButton" onClick={()=>SubmitUser()}>Create</button>
    </div>
  );
}
