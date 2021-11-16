import './userList.css'
import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { DeleteOutline } from "@material-ui/icons";
import EditIcon from '@material-ui/icons/Edit';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function BasicEditingGrid() {

  const [LoadUser, setLoadUser] = useState([]);
  
 function AllUserData(){
    axios.get('http://localhost:4000/loaduser').then((res) => setLoadUser(res.data)).catch(err => window.alert(err))
  }

  useEffect(() => {
    AllUserData();
    console.log(LoadUser);
  }
  , [])

  async function DeleteUser(id){
    const result =await axios.put(`http://localhost:4000/deleteuser/${id}`);
    result.data ? AllUserData() : alert("Error");
  }


  const columns = [
    { field: "RegistrationNo", headerName: "Registration No.",type:"string", width: 200, editable: true },
    { field: "IntinitationLetterSerial", headerName: "Intinitation Letter Serial", type: "string", width: 250, editable: true },
    {
      field: "BookingFormSerial",
      headerName: "Booking Form Serial",
      type: "string",
      width: 200,
      editable: true
    },
    {
      field: "CreatedBy",
      headerName: "Created By",
      type: "string",
      width: 220,
      editable: false
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <EditIcon
              className="userListEdit"
               />
            </Link>
            
            <DeleteOutline className="userListDelete" onClick={()=>DeleteUser(params.row.id)}></DeleteOutline>
              
            
          </>
        );
      },
    },
  ];
  
  const rows = LoadUser && LoadUser.map((user,index)=>{
     return {
        id: user._id,
        RegistrationNo: user.RegistrationNo,
        BookingFormSerial: user.BookingFormSerial,
        IntinitationLetterSerial: user.IntinitationLetterSerial,
        CreatedBy: user.CreatedBy
      }
    })
  

  return (
    <>
    <div className="userList">
    <Link to={"/newUser"}>
        <PersonAddIcon
        className="userListAdd"/>
    </Link>
      <DataGrid rows={rows} columns={columns} />
    </div>
    </>
  );
}
