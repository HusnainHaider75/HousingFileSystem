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
  }
];

columns.map((i)=>{
  setTimeout(() => {
    console.log(i)
  }, 5000);
})